const fetch = require('node-fetch');

module.exports = async function buscaDados(uf) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`);
    const json = await response.json();

    return json
};