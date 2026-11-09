const COOKIE = `__cf_bm=.KIxof8PfD9HPwWJ3fCVafkAD6Y9ERYqQ4QMT3pxkqw-1794252386.2973487-1.0.1.1-2KU5ughudP_KHz01HWqfwaxeVYAtqzQ8lob37rNS7gDsoiTDD_EoPkHdIenLOkE0kw.b6ihIw2hWNP7b92GZ5.OMXGvre8ydIwMU5OXaHDrMmSduK_8iUWMP15OFNifI; __cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGmSuGUSPAnNgfv`

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
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
