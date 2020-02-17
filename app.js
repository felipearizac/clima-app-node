const argv = require('./config/yargs').argv;
const axios = require('./config/lugares');
const clima = require('./config/clima');


const getInfo = async(direccion) => {

    try {
        let r = await axios.getDireccion(direccion);
        console.log(r);
        let respClima = await clima.getClima(r.latitud, r.longitud);

        return `El clima de ${r.nombre} es de: ${respClima}`;
    } catch (e) {
        throw new Error(e);
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);