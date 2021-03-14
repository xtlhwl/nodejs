var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

fs.readFile('/path/file.txt', function(err, file) {
	console.log('读取完成', file);
});

http
	.createServer(function(req, res) {
		var postData = '';
		req.setEncoding('utf8');
		req.on('data', function(trunk) {
			console.log('触发');
			postData += trunk;
		});
		req.on('end', function() {
			console.log('触发2');
			res.end(postData);
		});
	})
	.listen(8080);
console.log('服务器启动完成');
console.log('测试键盘');

console.log('发起读取文件');
var 
