const querystringToObject = (querystring) => {
    let pairs = querystring.slice(1).split('&'); 
    let result = {};
    pairs.forEach(pair => {
        if (pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        }
    });

    return JSON.parse(JSON.stringify(result));
}

export default querystringToObject;
