const httpWrapper = {

    get(url, callback) {
        return fetch(url)
        .then(response => response.json())
        .then(data => callback(data));
    },

    post(url, params, callback) {
        return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
        })
        .then(response => response.json())
        .then(data => callback(data));
    }
};

export default httpWrapper;
  