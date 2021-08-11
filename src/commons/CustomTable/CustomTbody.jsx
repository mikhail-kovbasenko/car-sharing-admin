import CustomRow from "./CustomRow";

const CustomTbody = ({items, list, formate}) => {
	return (
		<tbody>
				{
					items.map(item => <CustomRow item={item} list={list} formate={formate} key={item.id}/>)
				}
		</tbody>
	)
}

export default CustomTbody;