const newRoute = process.env.ROUTE

const settings = {
  development: {
    
    url: {
    //   BASE_URL: protocol + '//' + host + '/' + newRoute + '/api/v1/',
      BASE_URL: 'http://localhost:3001/',
    //   base_url: protocol + '//' + host + '/connect/api/v1/graphs',
      // base_url: 'http://127.0.0.1:5006/connect/api/v1/graphs'

    }
}
}

export default settings.development 