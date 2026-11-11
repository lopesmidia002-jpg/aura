#!/usr/bin/env python3
"""
AURA MAISON DE BEAUTÉ — AUDITORIA COMPLETA DE RESPONSIVIDADE E ALINHAMENTO MOBILE
"""

import subprocess
import json
import os
import re

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
WORKSPACE = r"C:\Users\Nilto\OneDrive\Documentos\Projetos novembro\aura\aura\asserts"
TEMP_DIR = r"C:\Users\Nilto\AppData\Local\Temp\chrome_mobile_audit"
os.makedirs(TEMP_DIR, exist_ok=True)

AUDIT_JS = """
<script id="mobile-audit-runner">
(function() {
  const winW = window.innerWidth;
  const docW = document.documentElement.scrollWidth;
  const bodyW = document.body.scrollWidth;
  
  const elements = document.querySelectorAll('body *:not(script):not(style)');
  const overflows = [];
  
  elements.forEach(el => {
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
    if (style.position === 'fixed') return;
    
    const r = el.getBoundingClientRect();
    if (r.right > winW + 1.5 || r.left < -1.5) {
      const id = el.id ? '#' + el.id : '';
      const cls = el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '';
      const tag = el.tagName.toLowerCase();
      
      overflows.push({
        selector: `${tag}${id}${cls}`,
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        overflowAmount: Math.round(Math.max(r.right - winW, -r.left)),
        textSnippet: (el.innerText || '').slice(0, 35).replace(/\\n/g, ' ')
      });
    }
  });

  const report = {
    viewportWidth: winW,
    scrollWidth: docW,
    bodyScrollWidth: bodyW,
    hasHorizontalOverflow: docW > winW,
    overflowCount: overflows.length,
    overflows: overflows
  };

  const outDiv = document.createElement('div');
  outDiv.id = 'AUDIT_OUTPUT_DATA';
  outDiv.style.display = 'none';
  outDiv.textContent = JSON.stringify(report);
  document.body.appendChild(outDiv);
})();
</script>
"""

def generate_test_file():
    with open(os.path.join(WORKSPACE, "index.html"), "r", encoding="utf-8") as f:
        html = f.read()
    
    test_html = html.replace("</body>", f"{AUDIT_JS}\n</body>")
    test_file_path = os.path.join(TEMP_DIR, "test_audit_temp.html")
    with open(test_file_path, "w", encoding="utf-8") as f:
        f.write(test_html)
    return test_file_path

def run_viewport_audit(width, height=812):
    test_file_path = os.path.join(TEMP_DIR, "test_audit_temp.html")
    file_url = f"file:///{test_file_path.replace(os.sep, '/')}"
    user_data = os.path.join(TEMP_DIR, f"profile_{width}")
    
    cmd = [
        CHROME_PATH,
        "--headless=new",
        f"--user-data-dir={user_data}",
        f"--window-size={width},{height}",
        "--hide-scrollbars",
        "--dump-dom",
        file_url
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    dom = proc.stdout
    m = re.search(r'<div id="AUDIT_OUTPUT_DATA"[^>]*>(.*?)</div>', dom)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception as e:
            return {"error": f"JSON parse error: {e}"}
    return {"error": "Audit element not found", "dom_length": len(dom)}

def main():
    print("=" * 70)
    print("AURA MAISON DE BEAUTÉ — AUDITORIA MOBILE INTEGRAL")
    print("=" * 70)
    
    generate_test_file()
    
    viewports = [
        (320, 568, "320px (iPhone SE 1st Gen / Telas Ultra-Estreitas)"),
        (360, 780, "360px (Padrão Android / Samsung Galaxy A/S)"),
        (375, 812, "375px (iPhone SE 2/3, iPhone 11 Pro, iPhone 12/13 Mini)"),
        (390, 844, "390px (iPhone 12/13/14/15 Padrão)"),
        (414, 896, "414px (iPhone XR / 11 / Plus / Max)"),
        (480, 854, "480px (Smartphones Grandes / Phablets)"),
        (768, 1024, "768px (Tablets / iPad Portrait)")
    ]
    
    for w, h, desc in viewports:
        print(f"\n--- Testando Viewport: {desc} ---")
        res = run_viewport_audit(w, h)
        if "error" in res:
            print(f"  ❌ Erro: {res['error']}")
            continue
            
        print(f"  Viewport: {res['viewportWidth']}px | scrollWidth: {res['scrollWidth']}px | Overflow: {res['hasHorizontalOverflow']}")
        print(f"  Total de elementos com overflow: {res['overflowCount']}")
        
        if res['overflowCount'] > 0:
            print("  Top elementos com overflow:")
            seen = set()
            for ov in res['overflows']:
                key = (ov['selector'], ov['overflowAmount'])
                if key not in seen and len(seen) < 12:
                    seen.add(key)
                    print(f"    - {ov['selector']}: L={ov['left']}px R={ov['right']}px W={ov['width']}px -> +{ov['overflowAmount']}px além da tela ('{ov['textSnippet']}')")
        else:
            print("  ✅ ZERO overflow horizontal detectado!")

if __name__ == '__main__':
    main()
