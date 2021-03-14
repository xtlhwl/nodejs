var fs = require('fs');

fs.readFile('/path/file.txt', (err, file) => {
	console.log('读取完成', err, file);
});

console.log('发起读取文件');
