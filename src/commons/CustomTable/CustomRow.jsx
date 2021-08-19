import nextId from "react-id-generator";

const CustomRow = ({item, list, checkProp}) => {
	return (
		<tr>
			{
				list.map(listItem => {		
					const keyId = nextId();

					return <td key={keyId}>{checkProp(item, listItem)}</td>
				})
			}
		</tr>
	)
}

export default CustomRow;