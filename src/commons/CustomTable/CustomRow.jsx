import nextId from "react-id-generator"

const CustomRow = ({item, list, checkProp, handleClick}) => {
	return (
		<tr onClick={() => handleClick(item.id)}>
			{
				list.map(listItem => {		
					const keyId = nextId();

					return <td key={keyId}>{checkProp(item, listItem)}</td>
				})
			}
		</tr>
	)
}

export default  CustomRow;