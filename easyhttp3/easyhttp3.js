class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const dataRes = await response.json();
    return dataRes;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const dataRes = await response.json();
    return dataRes;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const dataRes = await response.json();
    return dataRes;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const dataRes = await response.json();
    return dataRes;
  }
}
