const fs = require('fs');

// 小文件Copy
function SmallCopy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
	console.log(argv);
	if (argv[0] == 's') {
		SmallCopy(argv[1], argv[2]);
	} else {
		greatCopy(argv[1], argv[2]);
	}
	fs.readFile('./path/file.txt', function(err, file) {
		console.log(err, file.toString('utf-8'), '‘测试');
	});
}
// fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，
// 并且用pipe方法把两个数据流连接了起来。连接起来后发生的事情，说得抽象点的话，水顺着水管从一个桶流到了另一个桶
function greatCopy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst)); // 读取src文件用pipe管道到dst文件当中
}

// process 是一个全局变量，可以用通过process.argv获取命令行参数
main(process.argv.slice(2));
