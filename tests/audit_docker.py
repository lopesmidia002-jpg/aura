#!/usr/bin/env python3
"""
AURA MAISON DE BEAUTÉ — AUDITORIA DE INTEGRIDADE & PERFORMANCE NO DOCKER
Valida status HTTP, carregamento de todos os assets estáticos, endpoints da API e metadados SEO.
"""

import urllib.request
import urllib.parse
import json
import time

BASE_URL = "http://localhost:3000"

def test_endpoint(path, method="GET", data=None):
    url = f"{BASE_URL}{path}"
    headers = {"User-Agent": "AuraAuditor/1.0"}
    req_data = None
    if data:
        headers["Content-Type"] = "application/json"
        req_data = json.dumps(data).encode("utf-8")

    req = urllib.request.Request(url, data=req_data, headers=headers, method=method)
    start_time = time.time()
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            elapsed = (time.time() - start_time) * 1000
            content = resp.read()
            content_type = resp.headers.get("Content-Type", "")
            return {
                "url": path,
                "status": resp.status,
                "content_type": content_type,
                "size_bytes": len(content),
                "elapsed_ms": round(elapsed, 2),
                "content": content.decode("utf-8", errors="ignore")
            }
    except Exception as e:
        return {
            "url": path,
            "status": "ERROR",
            "error": str(e)
        }

def run_full_audit():
    print("=" * 70)
    print("AURA MAISON DE BEAUTÉ — INICIANDO AUDITORIA NO DOCKER (PORTA 3000)")
    print("=" * 70)

    # 1. Teste da Landing Page
    index_res = test_endpoint("/")
    print(f"[HTML] / -> Status: {index_res.get('status')} | Tamanho: {index_res.get('size_bytes')}B | Tempo: {index_res.get('elapsed_ms')}ms")
    assert index_res.get("status") == 200, "Falha ao carregar index.html"
    
    html = index_res.get("content", "")
    assert "AURA Maison de Beauté" in html, "Título da marca não encontrado"
    assert "BELEZA QUE REVELA" in html and "A SUA MELHOR" in html, "Headline Hero não encontrada"
    assert "application/ld+json" in html, "Schema.org JSON-LD não encontrado"
    assert "og:image" in html, "Open Graph não configurado"
    assert "gallery-lightbox" in html, "Modal da Galeria Lightbox não configurado"
    assert "mosaic-overlay" in html, "Overlay com texto nas fotos da galeria não encontrado"
    print("  -> Validações de conteúdo, SEO, Schema.org e Lightbox: APROVADAS")

    # 2. Teste de CSS & JS
    css_res = test_endpoint("/css/style.css")
    js_res = test_endpoint("/js/main.js")
    print(f"[CSS] /css/style.css -> Status: {css_res.get('status')} | {css_res.get('size_bytes')}B ({css_res.get('elapsed_ms')}ms)")
    print(f"[JS]  /js/main.js    -> Status: {js_res.get('status')} | {js_res.get('size_bytes')}B ({js_res.get('elapsed_ms')}ms)")
    assert css_res.get("status") == 200
    assert js_res.get("status") == 200
    assert "gallery-lightbox" in css_res.get("content", ""), "CSS da Galeria Lightbox não encontrado"
    assert "initGalleryLightbox" in js_res.get("content", ""), "Função JS initGalleryLightbox não encontrada"

    # 3. Teste das Imagens AVIF e JPG
    images = [
        "photo-corte-visagismo.avif",
        "photo-corte-visagismo.jpg",
        "photo-1487412720507-e7ab37603c6f_002_Po4W.avif",
        "photo-1519699047748-de8e457a634e_Po4W.avif",
        "photo-1519741497674-611481863552_002_Po4W.avif",
        "photo-1522337360788-8b13dee7a37e_Po4W.avif",
        "photo-1522337660859-02fbefca4702_Po4W.avif",
        "photo-1527799820374-dcf8d9d4a388_002_Po4W.avif",
        "photo-1527799820374-dcf8d9d4a388_002_Po4W.jpg",
        "photo-ferramentas-conceito-16-10.avif",
        "photo-ferramentas-conceito-16-10.jpg",
        "photo-1534528741775-53994a69daeb_Po4W.avif",
        "photo-1544005313-94ddf0286df2_Po4W.avif",
        "photo-1560066984-138dadb4c035_003_Po4W.avif",
        "photo-1562322140-8baeececf3df_Po4W.avif",
        "photo-1573496359142-b8d87734a5a2_Po4W.avif",
        "photo-1580489944761-15a19d654956_Po4W.avif",
        "photo-1580618672591-eb180b1a973f_003_Po4W.avif",
        "photo-1595476108010-b4d1f102b1b1_002_Po4W.avif"
    ]

    print(f"\n[ASSETS] Verificando {len(images)} imagens no Docker:")
    for img in images:
        img_res = test_endpoint(f"/imagens/{img}")
        assert img_res.get("status") == 200, f"Falha na imagem {img}"
        print(f"  ✓ {img} -> HTTP 200 | {img_res.get('content_type')} | {img_res.get('size_bytes')}B")

    # 4. Teste dos Endpoints da API no Docker
    print("\n[API] Testando endpoints REST no Nginx:")
    api_booking = test_endpoint("/api/agendamentos", method="POST", data={"name": "Helena", "phone": "11987654321"})
    print(f"  ✓ POST /api/agendamentos -> Status: {api_booking.get('status')} | {api_booking.get('content')}")
    assert api_booking.get("status") == 200

    api_news = test_endpoint("/api/newsletter", method="POST", data={"email": "teste@aurabeaute.com.br"})
    print(f"  ✓ POST /api/newsletter  -> Status: {api_news.get('status')} | {api_news.get('content')}")
    assert api_news.get("status") == 200

    print("\n" + "=" * 70)
    print("AUDITORIA CONCLUÍDA COM 100% DE SUCESSO NO DOCKER!")
    print("=" * 70)

if __name__ == "__main__":
    run_full_audit()
