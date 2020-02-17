const direccion = {
    alias: 'd',
    demand: true,
    desc: 'Direccion de la ciudad'
}

const argv = require('yargs')
    .options({
        direccion
    }).argv;

module.exports = {
    argv
}