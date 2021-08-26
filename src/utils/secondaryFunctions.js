export function getCorrectDatetimeFormat(time) {
	return new Intl.DateTimeFormat('ru', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}).format(new Date(time));
}
export function getCorrectImgSrc(path) {
	const defaultUrl = 'https://cors-anywhere.herokuapp.com/api-factory.simbirsoft1.com/';

	if(path.indexOf('base64') !== -1) return path;

	return defaultUrl + path;
}
export function getCorrectPriceFormat(price) {
	return `${new Intl.NumberFormat('ru').format(price)}`;
}
export function getTableData(data) {
	if(!Array.isArray(data)) return false;
	if(data.length < 1) return false;

	const tableData = [];

	for(let item of data) {
		tableData.push({
			title: item[0],
			src: item[1],
			formmating: item[2] ? item[2] : null
		})
	}

	return tableData;
}
export function getRandomString() {
	const stringLength = Math.floor(Math.random() * 25) + 1;
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';

	for(let i = 0; i < stringLength; i++) {
		result += characters[Math.floor(Math.random() * characters.length)];
	}

	return result;
}