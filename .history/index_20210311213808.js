var fs = require('fs');

console.log(fs, '----');

fs.readFile('/path', () => {
	console.log('读取完成');
});

console.log('发起读取文件');
