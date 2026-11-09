const COOKIE = `__cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGmSuGUSPAnNgfv; pplx.visitor-id=c30ae990-03d1-42a4-891f-c809df490e71; pplx.session-id=f2fd9134-4438-4296-b423-1389df819d78; pplx.edge-vid=94ac582d-63d0-4519-a2d3-4eecdd8cf115.1794253334-qcU--4rxtNiVhqzG6vnOkcKomSaFko6fbdi4Qm7oaxw; pplx.edge-sid=2049c4df-87f8-4838-8e6f-f1e7ad0b7718; singular_device_id=62b769a7-f981-4d90-962f-d00820fc3625; cf_clearance=CixKBk5aNY_gGYzff8aoRsRz6P-FwUyW7Le7U09RgzDL61Z-uX-P5kRgO3E6ZJxz7X8K2nV3TFOrEnL-0A4Xhnj2EFvI1_jyDFq-INL7aphZPh2nPCUkJ9xDoDVfheZoefmJ7Ti3T78e374V-AfCAm1wVuZl1sXcdiQVgSvF75eRE_EJsc2tuy0wVO-El4d5yEVG13qkV0F093HBW3_1N6TW_-hZIvnrcm5d96JoBdUbgZTL7w-p9BsZJvMdpqGSpGpoD88mvbjq91weliEJYE_sG-zIGWxeHAH9GQKMZlxiwL2eQLl7ZybOF8o; g_state={"i_l":0,"i_ll":1794253786412,"i_b":"JRVCJNdAT4ndm0q0SKYPh2oOoWnwYGfJ8AeOSvMWtS4","i_e":{"enable_itp_optimization":24},"i_et":1794253786412}; next-auth.csrf-token=de5e454a3d62c4cbf4985ec355dec4ee0a531306e00859bc96f3def15457bc00%7C6988e618ea81076e2e62384a35ffaff49fe0da4b75f1eaad9d7b906d6793dc2d; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..a3G8Rx_rDAcZJEso.I1Z39ur8BHrB63PqzbineDiCUQB545YxG4XJKdvuUiBIJ1nLjjR-SuaYtr1189OB7ZeE_1SHfojIlkbJS9vW2C85p3LgLH-rRhfzdDlPyjj6VaRb_4KyeqGUG5g0-VIdmBc0xUJz-N-xC_kdvDkTmA_dcde32_lB_isP7_Zr-ctsz-TP1i8MKlIa-XDIz959zgOnvdzHPlzWagVVgTB9DRbyK0APkbiXzAaw7onNSdbUgvWDE0FfkrGhplQzEw.jHRU1P7dcUJwFXK87IjP8w; __Host-pplx-last-active-account=bbfb81fd-238d-4c6e-9c55-af8702205825; AWSALB=WM0XPNDtg+1VEBhlLRShwc6D/Ytc6qtlka80eXK5V14ru6ecdMwNCZ38xQ7yfBzZzJQoejBGJPvn34V9WgXVThg4vEmaE7ctXSDwlxTCvYVmCQj7WcAIyqGRfSXW; AWSALBCORS=WM0XPNDtg+1VEBhlLRShwc6D/Ytc6qtlka80eXK5V14ru6ecdMwNCZ38xQ7yfBzZzJQoejBGJPvn34V9WgXVThg4vEmaE7ctXSDwlxTCvYVmCQj7WcAIyqGRfSXW; pplx.metadata={%22qc%22:0%2C%22qcu%22:0%2C%22qcm%22:0%2C%22qcc%22:0%2C%22qcco%22:0%2C%22qccol%22:0%2C%22qcdr%22:0%2C%22qcs%22:0%2C%22qcg%22:0%2C%22qcd%22:0%2C%22hli%22:true%2C%22hcga%22:false%2C%22hcds%22:false%2C%22hso%22:false%2C%22hfo%22:false%2C%22hsco%22:false%2C%22hfco%22:false%2C%22hsma%22:false%2C%22hdc%22:false%2C%22sc%22:1}; pplx.trackingAllowed=false; _dd_s_v2=aid=e35c8a15-9d45-465c-83c8-e39453168cae&id=effb12bc-0764-4723-8eed-87cc74149bc7&created=1794253335251&expire=1794254793420&c=0; __Secure-pplx.session.bbfb81fd-238d-4c6e-9c55-af8702205825=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..AUCkDO7REcNNGyWj.qDOOqtvEy2wgQlVxs8ZPE0ttGnbmCd7QNmdfYItCB5lWZsAk_2_hW6ZV7Qnk-G01CgSPKJk3CCwllaTyQ5C2fa4EqAwgsUSTg3RDV3tsWY--pwIXPd7uOVepBbcwO3_f8Thh3uQLW5_PBgqUJ2DZ-GiVuomHqAQ3TQgpsPnYdF0T8UzdkXvvnIp7YDaQqYxD7JXbAFLVHVj3sjHIw94IUqPFufoVsdZlElUK8gA5i3ELjyStajpXUKJbCN8aLw.oqoeK1DtBJ1SHfU62kvG0g; __cf_bm=0.0.xbs99Ez.nRQj3G7By1d_kLGw6z6Bjs7DujhhX9c-1794253894.2759845-1.0.1.1-AaBmheQqpJ3FdvoMLFUzmWdd.9cxS3JW2.VZG8ZPhok_O5fr4x5y9DNydc3q8446SJdGmFHkzPYpejKZBk97Us5ag0XE18HexebUKGTuPaf5UekuWNNEt61vi.WNL2R5`

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Mobile Safari/537.36 Edg/145.0.0.0',
  'Accept': 'application/json, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.perplexity.ai/',
  'Origin': 'https://www.perplexity.ai',
  'cookie': COOKIE
}

// Add any new endpoints here
const ENDPOINTS = {
  earnings:   (ticker) => `https://www.perplexity.ai/rest/finance/earnings/${ticker}`,
  financials: (ticker) => `https://www.perplexity.ai/rest/finance/financials/${ticker}`,
  news:       (ticker) => `https://www.perplexity.ai/rest/finance/news/${ticker}`,
  profile:    (ticker) => `https://www.perplexity.ai/rest/finance/profile/${ticker}`,
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const { ticker, type } = req.query

  if (!ticker) return res.status(400).json({ error: 'ticker is required. e.g. ?ticker=AAPL' })
  if (!type) return res.status(400).json({ error: 'type is required. e.g. ?type=earnings or ?type=financials' })
  if (!ENDPOINTS[type]) return res.status(400).json({ error: `Unknown type "${type}". Available: ${Object.keys(ENDPOINTS).join(', ')}` })

    try {
    const url = ENDPOINTS[type](ticker.toUpperCase())
    const response = await fetch(url, { headers: HEADERS })
    const text = await response.text()

    try {
      return res.status(200).json(JSON.parse(text))
    } catch {
      return res.status(502).json({
        error: 'Upstream did not return JSON',
        status: response.status,
        contentType: response.headers.get('content-type'),
        preview: text.slice(0, 300),
      })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
