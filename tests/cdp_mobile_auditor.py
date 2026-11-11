#!/usr/bin/env python3
"""
AURA MAISON DE BEAUTÉ — AUDITORIA CDP COM EMULAÇÃO MOBILE REAL
"""

import socket
import struct
import base64
import os
import subprocess
import time
import json
import urllib.request

WORKSPACE = r"C:\Users\Nilto\OneDrive\Documentos\Projetos novembro\aura\aura\asserts"
OUTPUT_DIR = os.path.join(WORKSPACE, "tests", "screenshots")
os.makedirs(OUTPUT_DIR, exist_ok=True)

class ChromeCDP:
    def __init__(self, port=9222):
        self.port = port
        self.proc = None
        self.sock = None
        self.msg_id = 0

    def start(self, initial_url="http://localhost:3000"):
        user_dir = r"C:\Users\Nilto\AppData\Local\Temp\chrome_cdp_profile"
        self.proc = subprocess.Popen([
            r'C:\Program Files\Google\Chrome\Application\chrome.exe',
            '--headless=new',
            f'--remote-debugging-port={self.port}',
            f'--user-data-dir={user_dir}',
            '--hide-scrollbars',
            initial_url
        ])
        time.sleep(2.0)
        
        tabs = json.loads(urllib.request.urlopen(f'http://localhost:{self.port}/json').read())
        ws_url = tabs[0]['webSocketDebuggerUrl']
        parts = ws_url.replace("ws://", "").split("/")
        host_port = parts[0].split(":")
        host = host_port[0]
        port = int(host_port[1])
        path = "/" + "/".join(parts[1:])
        
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.connect((host, port))
        key = base64.b64encode(os.urandom(16)).decode()
        handshake = (
            f"GET {path} HTTP/1.1\r\n"
            f"Host: {host}:{port}\r\n"
            f"Upgrade: websocket\r\n"
            f"Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            f"Sec-WebSocket-Version: 13\r\n\r\n"
        )
        self.sock.sendall(handshake.encode())
        resp = self.sock.recv(4096)
        assert b"101" in resp, f"Handshake failed: {resp}"

    def send_cmd(self, method, params=None):
        self.msg_id += 1
        req_id = self.msg_id
        msg = {"id": req_id, "method": method}
        if params:
            msg["params"] = params
        payload = json.dumps(msg).encode('utf-8')
        mask_key = os.urandom(4)
        length = len(payload)
        if length <= 125:
            header = bytes([0x81, 0x80 | length]) + mask_key
        elif length <= 65535:
            header = bytes([0x81, 0x80 | 126]) + struct.pack('>H', length) + mask_key
        else:
            header = bytes([0x81, 0x80 | 127]) + struct.pack('>Q', length) + mask_key
        masked_payload = bytes(b ^ mask_key[i % 4] for i, b in enumerate(payload))
        self.sock.sendall(header + masked_payload)
        return req_id

    def recv_msg(self, target_id=None):
        while True:
            head = self._recv_exact(2)
            b1, b2 = head[0], head[1]
            length = b2 & 0x7F
            if length == 126:
                length = struct.unpack('>H', self._recv_exact(2))[0]
            elif length == 127:
                length = struct.unpack('>Q', self._recv_exact(8))[0]
            data = self._recv_exact(length)
            txt = data.decode('utf-8', errors='ignore')
            obj = json.loads(txt)
            if target_id is None or obj.get("id") == target_id:
                return obj

    def _recv_exact(self, n):
        buf = bytearray()
        while len(buf) < n:
            chunk = self.sock.recv(n - len(buf))
            if not chunk:
                raise ConnectionError("Socket closed prematurely")
            buf.extend(chunk)
        return bytes(buf)

    def evaluate(self, expr):
        req_id = self.send_cmd("Runtime.evaluate", {"expression": expr, "returnByValue": True})
        res = self.recv_msg(req_id)
        return res.get("result", {}).get("result", {}).get("value")

    def capture_screenshot(self, out_path, clip=None):
        params = {"format": "png"}
        if clip:
            params["clip"] = clip
        req_id = self.send_cmd("Page.captureScreenshot", params)
        res = self.recv_msg(req_id)
        data_b64 = res.get("result", {}).get("data")
        if data_b64:
            with open(out_path, "wb") as f:
                f.write(base64.b64decode(data_b64))
            return True
        return False

    def close(self):
        try:
            if self.sock:
                self.sock.close()
        except:
            pass
        try:
            if self.proc:
                self.proc.terminate()
        except:
            pass

def audit_mobile_viewports():
    cdp = ChromeCDP()
    cdp.start("http://localhost:3000")
    
    viewports = [
        ("320x568", 320, 568, 2.0, "iPhone SE 1st Gen"),
        ("360x780", 360, 780, 2.0, "Padrão Android (Galaxy)"),
        ("375x812", 375, 812, 2.0, "iPhone SE 2/3 / iPhone 11 Pro"),
        ("390x844", 390, 844, 3.0, "iPhone 12/13/14/15"),
        ("414x896", 414, 896, 3.0, "iPhone XR / Plus / Max")
    ]
    
    results = {}
    
    try:
        for tag, w, h, dpr, label in viewports:
            print(f"\n=======================================================")
            print(f"TESTANDO: {label} ({tag} - DPR: {dpr})")
            print(f"=======================================================")
            
            # Set device metrics
            req_id = cdp.send_cmd("Emulation.setDeviceMetricsOverride", {
                "width": w,
                "height": h,
                "deviceScaleFactor": dpr,
                "mobile": True
            })
            cdp.recv_msg(req_id)
            time.sleep(0.5)
            
            # Evaluate metrics
            check_js = """
            (() => {
                const winW = window.innerWidth;
                const winH = window.innerHeight;
                const scrollW = document.documentElement.scrollWidth;
                const bodyScrollW = document.body.scrollWidth;
                
                const overflows = [];
                document.querySelectorAll('body *:not(script):not(style)').forEach(el => {
                    const st = window.getComputedStyle(el);
                    if (st.display === 'none' || st.visibility === 'hidden' || st.opacity === '0') return;
                    if (st.position === 'fixed') return;
                    const r = el.getBoundingClientRect();
                    if (r.right > winW + 1.5 || r.left < -1.5) {
                        overflows.push({
                            tag: el.tagName.toLowerCase(),
                            id: el.id,
                            cls: el.className ? (typeof el.className === 'string' ? el.className.slice(0, 30) : '') : '',
                            left: Math.round(r.left),
                            right: Math.round(r.right),
                            width: Math.round(r.width),
                            overflow: Math.round(Math.max(r.right - winW, -r.left))
                        });
                    }
                });
                
                const header = document.querySelector('.site-header');
                const brand = document.querySelector('.brand-logo');
                const btnHeader = document.querySelector('.btn-header');
                
                const headerCheck = {
                    headerW: header ? Math.round(header.getBoundingClientRect().width) : 0,
                    brandR: brand ? Math.round(brand.getBoundingClientRect().right) : 0,
                    btnHeaderL: btnHeader ? Math.round(btnHeader.getBoundingClientRect().left) : 0,
                    btnHeaderR: btnHeader ? Math.round(btnHeader.getBoundingClientRect().right) : 0,
                    btnHeaderW: btnHeader ? Math.round(btnHeader.getBoundingClientRect().width) : 0
                };
                
                const inset = document.querySelector('.concept-inset-img-box');
                const badge = document.querySelector('.badge-excellence-circle');
                const conceptCheck = {
                    insetL: inset ? Math.round(inset.getBoundingClientRect().left) : 0,
                    insetR: inset ? Math.round(inset.getBoundingClientRect().right) : 0,
                    badgeR: badge ? Math.round(badge.getBoundingClientRect().right) : 0
                };
                
                return {
                    winW,
                    winH,
                    scrollW,
                    bodyScrollW,
                    hasOverflow: scrollW > winW,
                    overflowCount: overflows.length,
                    overflows: overflows.slice(0, 10),
                    headerCheck,
                    conceptCheck
                };
            })()
            """
            data = cdp.evaluate(check_js)
            results[tag] = data
            
            print(f"  innerWidth: {data['winW']}px | scrollWidth: {data['scrollW']}px")
            print(f"  Overflow Horizontal: {data['hasOverflow']} (Count: {data['overflowCount']})")
            print(f"  Header check: Brand Right={data['headerCheck']['brandR']}px, Btn Left={data['headerCheck']['btnHeaderL']}px, Btn Right={data['headerCheck']['btnHeaderR']}px (Screen W={w}px)")
            print(f"  Conceito card: Inset Right={data['conceptCheck']['insetR']}px, Badge Right={data['conceptCheck']['badgeR']}px")
            
            if data['overflowCount'] > 0:
                print("  ❌ Elementos com overflow:")
                for o in data['overflows']:
                    print(f"     - <{o['tag']} id='{o['id']}' class='{o['cls']}'> L={o['left']} R={o['right']} W={o['width']} (+{o['overflow']}px)")
            else:
                print("  ✅ 100% ALINHADO E SEM NENHUM OVERFLOW!")
                
            snap_path = os.path.join(OUTPUT_DIR, f"cdp_{tag}_hero.png")
            cdp.capture_screenshot(snap_path, {"x": 0, "y": 0, "width": w, "height": min(h, 812), "scale": 1})
            print(f"  📸 Screenshot salvo: {snap_path}")

    finally:
        cdp.close()

if __name__ == '__main__':
    audit_mobile_viewports()
