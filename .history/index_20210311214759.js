var fs = require('fs');
var http = require('http');
var querystring == require('querystring')


fs.readFile('/path/file.txt', function(err, file) {
	console.log('读取完成', file);
});

console.log('发起读取文件');
