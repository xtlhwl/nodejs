const fs = require('fs');

// 小文件Copy
function SmallCopy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
	SmallCopy(argv[0], argv[1]);
}

// process 是一个全局变量，可以用通过process.argv获取命令行参数
main(process.argv.slice(2));
