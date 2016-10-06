#!/bin/env node

{
    'use strict';
    const EventEmitter = require('events').EventEmitter;
    const util = require('util');
    const BMP085 = require('bmp085');
    const bmp085 = new BMP085({
        'mode': 1,
        'address': 0x77,
        'device': '/dev/i2c-1'
    });
    let barometer = function() {
        if (!(this instanceof barometer)) return new barometer();
        this.polling = null;
    };
    util.inherits(barometer, EventEmitter);

    barometer.prototype.start = function() {
        let self = this;
        self.polling = setInterval(() => {
            bmp085.read((data) => {
                self.emit('reading', {
                    'pressure': data.pressure,
                    'temperature': data.temperature
                });
            });
        }, 1000);
    };

    barometer.prototype.stop = function() {
        let self = this;
        clearInterval(self.polling);
    };

    module.exports = barometer();
}
