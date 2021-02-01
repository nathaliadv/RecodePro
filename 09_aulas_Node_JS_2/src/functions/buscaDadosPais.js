const fetch = require('node-fetch');


module.exports = async function buscaDadosPais(country) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${country}`);
    const json = await response.json();

    return json
};