const express = require('express');

module.exports = app => {
	console.log(`app`);
	app.use('/searchWeather', require('./searchWeather')) 
}