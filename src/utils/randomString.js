export default function getRandomString() {
	const stringLength = Math.floor(Math.random() * 50) + 1;
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';

	for(let i = 0; i < stringLength; i++) {
		result += characters[Math.floor(Math.random() * characters.length)];
	}

	return result;
}