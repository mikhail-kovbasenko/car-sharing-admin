const CustomThead = ({list}) => {
	const getTheadData = list.map(item => {
		return <th>{item.title}</th>
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