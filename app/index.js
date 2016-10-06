#!/bin/env node

{
    'use strict';
    const lcd = require(__dirname + '/libs/lcd.js');
    const menu = require(__dirname + '/libs/menu.js');
    const chip = (process.env.BAROMETER_CHIP == null) ? 'bmp280' : process.env.BAROMETER_CHIP;
    const barometer = require(__dirname + '/libs/' + chip + '.js');
    let currentVolume = 0;
    lcd.init();
    barometer.start();

    lcd.on('button', (btn) => {
        console.log('A button has been pressed: ', btn);

        switch (btn) {
            case "up":

                break;
            case "down":

                break;
            case "select":

                break;
            case "right":

                break;
            case "left":

                break;
        }
    });

    barometer.on('error',(err) => {
      console.log(err);
    });

    barometer.on('reading', (data) => {
      console.log('pressure: ' + data.pressure + '; temperature: ' + data.temperature);
    });
}
