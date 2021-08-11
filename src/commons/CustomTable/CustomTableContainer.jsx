import CustomTable from "./CustomTable";

const CustomTableContainer = ({items, list}) => {
	if(items.length < 1) return null;

	const formateDataByType = (data, listItem) => {
		const props = listItem.src.split('.');
		const value = (function(arr) {
			let variable = data;

			for(let item of arr) {
				if(!variable[item]) {
					variable = null;
					break;
				}

				variable = variable[item];
			}

			return variable;
		})(props)

		return listItem.src === 'id' ? value : 1;
	}

	return <CustomTable items={items} list={list} formate={formateDataByType}/>
}

export default CustomTableContainer;