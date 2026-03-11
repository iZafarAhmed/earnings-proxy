const COOKIE = `pplx.visitor-id=4b30d8f4-31a7-4c82-9a9d-b6658143224c; __cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGki4uW3KbKgpZr; pplx.edge-vid=5b9b9256-0237-4fc7-8098-8014e5fc224f; next-auth.csrf-token=7e2ec98d249e116550c8d815c23c4358e81f38bb865d5988b9a2e89be7faecc1%7C38cd306c46132530ea2cda9ebb10f1676825febaf1f2433614fcbf323c590fe9; cf_clearance=R0kJZEmBHVJVdch00jvqT2qrfJ4N4L3Ena7_7ExKP_g-1773220701-1.2.1.1-dz_I_G9btLYotDOW1kInL4Q_CmM3RLRQ6cvuIYZqdp0vR58yG.7ZU5cpPrP4EnJyxhNJHGMV_ffPu_odgbSIpzK8sC496A02987aiHuKS1PsMS67ufFErmemLdJjKzex_lVAZTAlFgdqUQ_dVidNiHUk2Od4OG2wWPe3.hRTXVy0e5wWFBdSEkaVV7EueNFziqQ381wlNPdfyWwYcNJ70jwDQyBylpTxCdXvhH_lMOU; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..n5eXtlsPTLUVN8ti.On71m-0stHNp4kZPsd3TfCihuHzyWpDVYuXcSuvf6pIak9M8V-UEiAqW0fsgdhsd2gR5TiVt88tzkWy6Ezk4YLpZxtSpCpdSG62lSi2GQlw9wsa8Ys9-zCL0biTXMBRXV1vMVSR2GbngWWMttw5FfpNH2Lxvaq87LK556iggTAAsm2HIr523r7edIR8wDuyPV6PQKFPHINbok-t1AqekmChl370XcjJo4YlUtKpfT4xC_ODl8d5b9Z1uBD7Utg.iko4NcgNIFbxh5BFHOOnwQ`

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
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
