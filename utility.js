const requestPromise = require('request-promise')

exports.callApi = (apiUrl, endpoint, method = 'get', body, token) => {
  let headers
  if (token) {
    headers = {
      'content-type': 'application/json',
      'Authorization': token
    }
  } else {
    headers = {
      'content-type': 'application/json'
    }
  }

  let options = {
    method: method.toUpperCase(),
    uri: `${apiUrl}/${endpoint}`,
    headers,
    body,
    json: true
  }
  // console.log('in callapi', JSON.stringify(body))
  return requestPromise(options).then(response => {
    return new Promise((resolve, reject) => {
      console.log(response)
      if (response) {
        resolve(response)
      } else {
        reject(response)
      }
    })
  })
}

// loop over the array using the iteratee function
// at the specified interval
exports.intervalForEach = (array, iteratee, delay) => {
  let current = 0

  let interval = setInterval(() => {
    if (current === array.length) {
      clearInterval(interval)
    } else {
      iteratee(array[current])
      current++
    }
  }, delay)
}

exports.isUrl = (str) => {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  if (regexp.test(str)) {
    return true
  } else {
    return false
  }
}

exports.randomItem = (items) => {
  return items[Math.floor(Math.random()*items.length)]
}

exports.isYouTubeUrl = (url) => {
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(p)) ? RegExp.$1 : false;
}

exports.fbAccessToken(page) {
  if (page === 'demossa1') {
    return '?access_token=EAAEfZAUNcph4BAHhGy2lAjYHpZA0y1nrcUZAELNPosZA8cPxiEoEvUXZCp2zIHNwEyuVLSWsYV9XRCAuupnJighZC1ynYe2LoKjXrZCUpdY55SeZCCIYfdCgNPr4jeyumLG3HfLOLpUiOwS4m6Ml0f6TeEECDiNe9rj6YRisCZAKRWAZDZD'
  } else {
    return '?access_token=EAAfeYCgiwQwBAM4ZCYUxtbMEOTAF7dCutKFHH0IYFnXme8AAofwnc3otTgOjEI5Or5ruztCwvM23QRgSXZCTIwsSopnIaploZAZAJatsSXNZBicDESOoxAKEzuqF4nuZA6uvwaeICGkhr5kZC5KxmNG1F5b2ZA3phxxUzYLDPavBvgZDZD'
  }
}