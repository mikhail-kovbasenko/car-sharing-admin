import nextId from "react-id-generator";

const CustomRow = ({item, list, formate}) => {
	return (
		<tr>
			{
				list.map(listItem => {		
					const keyId = nextId();

					return <td key={keyId}>{formate(item, listItem)}</td>
				})
			}
		</tr>
	)
}

export default CustomRow;