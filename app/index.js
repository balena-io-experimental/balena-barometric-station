#!/bin/env node

{
    'use strict';
    const lcd = require(__dirname + '/libs/lcd.js');
    const supervisor = require(__dirname + '/libs/supervisor.js');
    const chip = (process.env.BAROMETER_CHIP == null) ? 'bmp280' : process.env.BAROMETER_CHIP;
    const barometer = require(__dirname + '/libs/' + chip + '.js');
    let currentVolume = 0;
    let color = {};
    lcd.init();
    barometer.start();

    lcd.writeOnDisplay(0, 0, 'Barometer ready');

    supervisor.start(500, ()=> {
           supervisor.on('status', (status) => {
             console.log('Supervisor status update: ' + status);
               lcd.writeOnDisplay(0, 3, status);
           });
       });

    lcd.on('button', (btn) => {
        console.log('A button has been pressed: ', btn);
        lcd.setColor(244,244,244);
        setTimeout(function blink() {
          lcd.setColor(colorTemp.r,colorTemp.g,colorTemp.b);
        },200);
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

    barometer.on('error', (err) => {
        console.log(err);
    });

    let getColorByTemp = function(temp) {
        let tempInt = parseInt(temp);
        switch (true) {
            case (tempInt < 16):
                color = {
                    r: 70,
                    g: 69,
                    b: 244
                };
                break;
            case (tempInt >= 16 && tempInt < 19):
                color = {
                    r: 105,
                    g: 69,
                    b: 244
                };
                break;
            case (tempInt >= 19 && tempInt < 22):
                color = {
                    r: 140,
                    g: 69,
                    b: 244
                };
                break;
            case (tempInt >= 22 && tempInt < 25):
                color = {
                    r: 175,
                    g: 69,
                    b: 244
                };
                break;
            case (tempInt >= 25 && tempInt < 28):
                color = {
                    r: 244,
                    g: 69,
                    b: 229
                };
                break;
            case (tempInt >= 28 && tempInt < 31):
                color = {
                    r: 244,
                    g: 69,
                    b: 183
                };
                break;
            case (tempInt >= 31):
                color = {
                    r: 254,
                    g: 46,
                    b: 46
                };
                break;
        }
        return color;
    };

    barometer.on('reading', (data) => {
        let colorTemp = getColorByTemp(data.temperature);
        lcd.setColor(colorTemp.r,colorTemp.g,colorTemp.b);
        lcd.writeOnDisplay(0, 1, 'T:' + data.temperature + ' P:' + data.pressure);
    });
}
