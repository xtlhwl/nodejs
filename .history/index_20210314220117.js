const fs = require('fs').promises;
// const http = require('http');
// const querystring = require('querystring');

// fs.readFile('/path/file.txt', function(err, file) {
// 	console.log('读取完成', file);
// });

// http
// 	.createServer(function(req, res) {
// 		var postData = '';
// 		req.setEncoding('utf8');
// 		req.on('data', function(trunk) {
// 			console.log('触发');
// 			postData += trunk;
// 		});
// 		req.on('end', function() {
// 			console.log('触发2');
// 			res.end(postData);
// 		});
// 	})
// 	.listen(8080);
// console.log('服务器启动完成');
// console.log('测试键盘');

// console.log('发起读取文件');

async function main() {
	await findSalesFiles('stores');
}

main();

async function findSalesFiles(folderName) {
	let salsFiles = [];

	const items = await fs.readdir(folderName, { withFileTypes: true });
	console.log(items);

	for (const item of items) {
		if (item.isDirectory()) {
			salsFiles = salsFiles.concat(await findSalesFiles(`${folderName}/${item.name}`));
		} else {
			if (item.name === 'sales.json') {
				salsFiles.push(`${folderName}/${item.name}`);
			}
		}
	}
	return salsFiles;
}
