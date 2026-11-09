const COOKIE = `__cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGmSuGUSPAnNgfv; pplx.visitor-id=c30ae990-03d1-42a4-891f-c809df490e71; pplx.session-id=f2fd9134-4438-4296-b423-1389df819d78; pplx.metadata={%22qc%22:0%2C%22qcu%22:0%2C%22qcm%22:0%2C%22qcc%22:0%2C%22qcco%22:0%2C%22qccol%22:0%2C%22qcdr%22:0%2C%22qcs%22:0%2C%22qcg%22:0%2C%22qcd%22:0%2C%22hli%22:false%2C%22hcga%22:false%2C%22hcds%22:false%2C%22hso%22:false%2C%22hfo%22:false%2C%22hsco%22:false%2C%22hfco%22:false%2C%22hsma%22:false%2C%22hdc%22:false%2C%22sc%22:1}; pplx.edge-vid=94ac582d-63d0-4519-a2d3-4eecdd8cf115.1794253334-qcU--4rxtNiVhqzG6vnOkcKomSaFko6fbdi4Qm7oaxw; pplx.edge-sid=2049c4df-87f8-4838-8e6f-f1e7ad0b7718; cf_clearance=CmgLRtJ5biUuoFYTBADWmcfUss8M42yhLxlFErmgElz_-dPkvA9KiQaVdVqBtjfCGSPWxPzH6rCJy1SldheK-_PozTbm4rKqV0SvPJx-JUrlKeh5ryWH72r84NSQbb0stKElM0jYamEE4HPPt93l9UnYmgs1OqXqNCn7wj019ej25pZqXRpfA8V5eD7sZ0w8cMOxF351SR2Xi2IH_t7AvG_xDJ1LytppzNM-pc8ouu2uY10p6aWImIU_jMrtyC6gCvxik732e9HMdzZfmEwgjUWvydmlQ9v2m5LOLoa7wZIJSl7VA0EcJMbO2aY; AWSALB=31UfOqwaKZnz8XjjTdclmWAtpows4//0BM6DiyfEpwAfnMSwj9NzGO79DzJUcG7UQz4WGZaauSUePhJ1NLMbjMTTerr7I5RLCKNQIz6nHtP2pU8upYfFYGgg1GFr; AWSALBCORS=31UfOqwaKZnz8XjjTdclmWAtpows4//0BM6DiyfEpwAfnMSwj9NzGO79DzJUcG7UQz4WGZaauSUePhJ1NLMbjMTTerr7I5RLCKNQIz6nHtP2pU8upYfFYGgg1GFr; g_state={"i_l":0,"i_ll":1794253336448,"i_b":"JRVCJNdAT4ndm0q0SKYPh2oOoWnwYGfJ8AeOSvMWtS4","i_e":{"enable_itp_optimization":24},"i_et":1794253336448}; singular_device_id=62b769a7-f981-4d90-962f-d00820fc3625; _dd_s_v2=aid=e35c8a15-9d45-465c-83c8-e39453168cae&id=effb12bc-0764-4723-8eed-87cc74149bc7&created=1794253335251&expire=1794254259409&c=0; __cf_bm=echpxY4GXwYUW5JMjutHvbO5ad8XqNaoqe2Yi3DNwow-1794253360.5205748-1.0.1.1-ttoK2l2TXnzonBAcsMRxWb1U4265E82yqQOzBf14KwHrvv90HNHE6DEdfk3GO8F9jDM4TUGFkrlGT37HxTfrmBVzkO6HN_2sUsJP0.pgtZU1oicnmm4FHuDC3tFHVcn5`

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
