import CustomRow from "./CustomRow";

const CustomTbody = ({items, list, checkProp}) => {
	return (
		<tbody>
				{
					items.map(item => <CustomRow item={item} list={list} checkProp={checkProp} key={item.id}/>)
				}
		</tbody>
	)
}

export default CustomTbody;