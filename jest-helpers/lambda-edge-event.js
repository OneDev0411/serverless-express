const clone = require('./clone')
const mergeDeep = require('./merge-deep')

const lambdaEdgeEvent = {
  'Records': [
    {
      'cf': {
        'config': {
          'distributionDomainName': 'd3qj9vk9486y6c.cloudfront.net',
          'distributionId': 'E2I5C7O4FEQEKZ',
          'eventType': 'viewer-request',
          'requestId': 'BKXC0kFgBfWSEgribSo9EwziZB1FztiXQ96VRvTfFNHYCBv7Ko-RBQ=='
        },
        'request': {
          'body': {
            'action': 'read-only',
            'data': 'eyJuYW1lIjoiU2FtIn0=',
            'encoding': 'base64',
            'inputTruncated': false
          },
          'clientIp': '203.123.103.37',
          'headers': {
            'host': [
              {
                'key': 'Host',
                'value': 'd3qj9vk9486y6c.cloudfront.net'
              }
            ],
            'user-agent': [
              {
                'key': 'User-Agent',
                'value': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
              }
            ],
            'content-length': [
              {
                'key': 'content-length',
                'value': '14'
              }
            ],
            'cache-control': [
              {
                'key': 'Cache-Control',
                'value': 'max-age=0'
              }
            ],
            'accept': [
              {
                'key': 'accept',
                'value': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
              }
            ],
            'if-none-match': [
              {
                'key': 'if-none-match',
                'value': 'W/"2e-Lu6qxFOQSPFulDAGUFiiK6QgREo"'
              }
            ],
            'accept-language': [
              {
                'key': 'accept-language',
                'value': 'en-US,en;q=0.9'
              }
            ],
            'upgrade-insecure-requests': [
              {
                'key': 'upgrade-insecure-requests',
                'value': '1'
              }
            ],
            'content-type': [
              {
                'key': 'content-type',
                'value': 'application/json'
              }
            ],
            'origin': [
              {
                'key': 'Origin',
                'value': 'https://d3qj9vk9486y6c.cloudfront.net'
              }
            ],
            'sec-fetch-site': [
              {
                'key': 'Sec-Fetch-Site',
                'value': 'same-origin'
              }
            ],
            'sec-fetch-mode': [
              {
                'key': 'Sec-Fetch-Mode',
                'value': 'cors'
              }
            ],
            'sec-fetch-dest': [
              {
                'key': 'Sec-Fetch-Dest',
                'value': 'empty'
              }
            ],
            'referer': [
              {
                'key': 'Referer',
                'value': 'https://d3qj9vk9486y6c.cloudfront.net/users'
              }
            ],
            'accept-encoding': [
              {
                'key': 'Accept-Encoding',
                'value': 'gzip, deflate, br'
              }
            ]
          },
          'method': 'GET',
          'querystring': '',
          'uri': '/'
        }
      }
    }
  ]
}

module.exports = function makeLambdaEdgeEvent (values = {}) {
  const baseEvent = clone(lambdaEdgeEvent)
  const mergedEvent = mergeDeep(baseEvent, values)

  return mergedEvent
}
