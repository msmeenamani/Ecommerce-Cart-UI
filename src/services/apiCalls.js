import _CONSTANT from '../settings/settings'

export const get = async (path) => {
  return fetch(`${_CONSTANT.url.BASE_URL}${path}`, {
    method: 'get'
  })
    .then(response => response.json()).then(res => {
      return res
    })
    .catch((error) => {
      console.error(error)
    })
}

export const post = async (path) => {
  return fetch(`${_CONSTANT.url.BASE_URL}${path}`, {
    method: 'post'
  })
  .then((res) => {
    return res
  })
    .catch((error) => {
      console.error(error)
    })
}

export const put = (path, id, body) => {
  return fetch(id == null ? `${_CONSTANT.url.BASE_URL}${path}` : `${_CONSTANT.url.BASE_URL}${path}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)

  })
    .then((response) => response.text())
    .then((res) => {
      return JSON.parse(res)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const deleteRow = (path, id) => {
  return fetch(`${_CONSTANT.url.BASE_URL}${path}/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error)
    })
}

export const deleteAccount = (path, authToken) => {
  return fetch(`${_CONSTANT.url.BASE_URL}${path}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken
    }
  })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error)
    })
}

