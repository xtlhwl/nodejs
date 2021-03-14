var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

fs.readFile('/path/file.txt', function(err, file) {
	console.log('读取完成', file);
});

http.createServer(function(req, res) {
	var postData = '';
	req.setEncoding('utf8');
	req.on('data', function(trunk) {
		postData += trunk;
	});
	req.on('end', function() {
		req.readableEnded(postData);
	});
});

console.log('发起读取文件');
