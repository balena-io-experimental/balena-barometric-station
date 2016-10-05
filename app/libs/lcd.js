#!/bin/env node

{
    'use strict';
    const EventEmitter = require('events').EventEmitter;
    const util = require('util');
    const JVSDisplayOTron = require('jvsdisplayotron');
    const dothat = new JVSDisplayOTron.DOTHAT();
    let lcd = function() {
        if (!(this instanceof lcd)) return new lcd();
    };
    util.inherits(lcd, EventEmitter);

    lcd.prototype.init = function() {
        let self = this;
        // Set the display contrast to a better-readable value.
        dothat.lcd.setContrast(45);
        // Set all backlight LEDs to an amber color.
        dothat.backlight.setToRGB(255, 193, 7);
        dothat.lcd.clear();
        self.writeOnDisplay('Resin.io');
        dothat.lcd.setCursorPosition(0, 1);

        dothat.touch.on('up', function() {
          if (parseInt(process.env.FLIP)) {
              self.emit('button', 'down');
          } else {
              self.emit('button', 'up');
          }
        });

        /**
         * Handles the 'down' event of the touch component.
         */
        dothat.touch.on('down', function() {
          if (parseInt(process.env.FLIP)) {
              self.emit('button', 'up');
          } else {
              self.emit('button', 'down');
          }
        });

        /**
         * Handles the 'left' event of the touch component.
         */
        dothat.touch.on('left', function() {
          if (parseInt(process.env.FLIP)) {
              self.emit('button', 'right');
          } else {
              self.emit('button', 'left');
          }
        });

        /**
         * Handles the 'right' event of the touch component.
         */
        dothat.touch.on('right', function() {
          if (parseInt(process.env.FLIP)) {
              self.emit('button', 'left');
          } else {
              self.emit('button', 'right');
          }
        });

        /**
         * Handles the 'select' event of the touch component.
         */
        dothat.touch.on('button', function() {
            self.emit('button', 'select');
        });

        /**
         * Handles the 'cancel' event of the touch component.
         */
        dothat.touch.on('cancel', function() {
            self.emit('button', 'cancel');
        });
    };

    lcd.prototype.writeOnDisplay = function(value) {
        dothat.lcd.clear();
        dothat.lcd.setCursorPosition(0, 1);
        dothat.lcd.write(value);

    };

    lcd.prototype.barGraph = function (percentage) {
      dothat.barGraph.setByPercentage(percentage);
    };

    module.exports = lcd();
}
