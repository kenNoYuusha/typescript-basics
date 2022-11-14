//var _ = require('lodash');
//para las librerias que no soportan typescript se debe instalar un modulo adicional de tipos
import _ from 'lodash';

const data = [
    {
        username: 'jorge',
        role: 'admin',
    },
    {
        username: 'arturo',
        role: 'seller',
    },
    {
        username: 'avis',
        role: 'seller',
    },
    {
        username: 'alex',
        role: 'customer',
    },
];

const res = _.groupBy(data, item => item.username);

const rta = _.groupBy(data, (item) => item.role);
console.log('rta', rta);
console.log('res', res);