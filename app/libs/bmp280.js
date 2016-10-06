#!/bin/env node

{
    'use strict';
    const EventEmitter = require('events').EventEmitter;
    const util = require('util');
    const BMP280 = require('node-bmp280');
    const bmp280 = new BMP280();
    let barometer = function() {
        if (!(this instanceof barometer)) return new barometer();
        this.polling = null;
    };
    util.inherits(barometer, EventEmitter);

    barometer.prototype.start = function() {
        let self = this;
        bmp280.begin((err) => {
            if (err) {
                if (err) {
                    self.emit('error', err)
                }
            } else {
                self.polling = setInterval(() => {
                    bmp280.readPressureAndTemparature(function(err, p, t) {
                        if (err) {
                            self.emit('error', err)
                        } else {
                            self.emit('reading', {
                                'pressure': p.toFixed(1),
                                'temperature': t.toFixed(1)
                            });
                        }
                    });
                }, 1000);
            }
        });
    };

    barometer.prototype.stop = function () {
      let self = this;
      clearInterval(self.polling);
    };

    module.exports = barometer();
}
