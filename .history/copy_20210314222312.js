const fs = require('fs');

function SmallCopy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
	SmallCopy(argv[0], argv[1]);
}

main(process.argv.slice(2));
