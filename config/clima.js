const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const appid = '4aabfe44d55de25187ffe9438c549840';
    const unidades = 'metrik';
    const instance = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${appid}`);

    return instance.data.main.temp;

}

module.exports = {
    getClima
}