const httpWrapper = async (url) => {
    let response = await fetch(url);
    return await response.json();
};

export default httpWrapper;
  