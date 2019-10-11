const urlMap = {
  // development: '',
  // staging: '',
  // production: ''
}

const baseUrl = urlMap[process.env.NODE_ENV]

export default baseUrl
