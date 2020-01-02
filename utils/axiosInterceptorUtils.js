module.exports = {
  // manipulate the request before it goes out
  requestHandler: (request, url) => {
    // use the request url to define the proper host
    request.headers.host = new URL(url).host

    return request
  }

}
