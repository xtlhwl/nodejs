const fs = require('fs');

// 小文件Copy
function SmallCopy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
	console.log(argv);
	// if(argv[0] == 's' ){
	//     SmallCopy(argv[1], argv[2]);
	// }else{
	//     greatCopy(argv[1],argv[2])
	// }
}
function greatCopy(src, dst) {}

// process 是一个全局变量，可以用通过process.argv获取命令行参数
main(process.argv.slice(2));
