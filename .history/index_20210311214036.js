var fs = require('fs');

fs.readFile('/path/file.text', () => {
	console.log('读取完成');
});

console.log('发起读取文件');
