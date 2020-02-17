const axios = require('axios');

const getDireccion = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    console.log(encodeURL);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'e6eccc04fdmsh1694e396b320615p17729ajsn575ba0ab3057' }
    });

    const lugar = await instance.get();

    if (lugar.data.Results.legth === 0) {
        throw new Error(`No se encontraron registros para ${direccion}`);
    }

    const data = lugar.data.Results[0];
    const nombre = data.name;
    const longitud = data.lon;
    const latitud = data.lat;

    return {
        nombre,
        latitud,
        longitud
    }
}

module.exports = {
    getDireccion
}