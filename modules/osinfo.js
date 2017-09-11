// task 1.5

var os = require('os');
var timeFormat = require('./timeformat');
var colors = require('colors'); // w konsoli Git Basch nie wyświetla kolorów, trzeba uzyc win cmd lub node command prompt

function getOSinfo() {
  var type = os.type();
	var release = os.release();
  var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();
	var uptime = os.uptime();      // method returns the system uptime in number of seconds.

	if (type === 'Darwin') {
    	type = 'OSX';
	} else if (type === 'Windows_NT') {
    	type = 'Windows';
	}
	console.log('Uptime: '.grey, timeFormat.print(uptime));
	console.log('System: '.red, type);
	console.log('Release: '.blue, release);
  console.log('CPU model: '.green, cpu);
  console.log('User name: '.yellow, userInfo.username);
	console.log('Home dir: '.white, userInfo.homedir);
}
exports.print = getOSinfo;
