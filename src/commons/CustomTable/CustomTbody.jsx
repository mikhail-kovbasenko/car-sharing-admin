import CustomRow from "./CustomRow";

const CustomTbody = ({items, list, checkProp, handleClick}) => {
	return (
		<tbody>
				{
					items.map(item => <CustomRow item={item} 
														  list={list} 
														  checkProp={checkProp}
														  key={item.id}
														  handleClick={handleClick}
														/>)
				}
		</tbody>
	)
}

export default CustomTbody;