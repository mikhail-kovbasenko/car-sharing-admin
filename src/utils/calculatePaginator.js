export default function calculatePaginator(count, size) {
	const pagesCount = Math.ceil(count / size);
	const pages = [];

	for(let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return pages;
}