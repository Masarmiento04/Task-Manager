/* import app from './app.js'
import config from '../config/config.js' */
const app = require('./app.js');

// settings
app.listen(app.get('port'))

console.log('server on port', app.get('port'));