async function getDogs(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
};

export {
    getDogs
};