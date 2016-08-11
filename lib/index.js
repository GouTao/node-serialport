'use strict';

/**
 * @module serialport
 * @copyright Chris Williams <chris@iterativedesigns.com>
 */

var SerialPort = require('./serialport');
var Binding = require('./bindings-auto-detect');

SerialPort.Binding = Binding;
module.exports = SerialPort;
