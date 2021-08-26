import nextId from "react-id-generator"

const CustomThead = ({list}) => {
	const getTheadData = list.map(item => {
		const keyId = nextId();

		return <th key={keyId}>{item.title}</th>
	})
	return (
		<thead>
			<tr>
				{getTheadData}
			</tr>
		</thead>
	)
}

export default CustomThead;