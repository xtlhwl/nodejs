const http = require('http');

http
	.createServer(function(request, response) {
		console.log(require.header);
		response.writable(200, {
			'Content-Type': 'text-plain'
		});
		response.end('Hello World\n');
	})
	.listen(3000);
