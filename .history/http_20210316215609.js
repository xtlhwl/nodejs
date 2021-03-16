const http = require('http');

http
	.createServer(function(request, response) {
		console.log(require.header);
		response.writable(200, {
			'Content-Type': 'text-plain'
		});
	})
	.listen(3000);
