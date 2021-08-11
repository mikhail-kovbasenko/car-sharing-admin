export default function getTableData(data) {
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