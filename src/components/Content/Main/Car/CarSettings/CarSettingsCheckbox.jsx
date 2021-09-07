const CarSettingsCheckbox = ({id, name, checked, toggleCheckbox}) => {
	return (
		<div>
			<input type="checkbox" id={`color-checkbox-${id}`}className="custom-checkbox" value={id} checked={checked} onChange={() => toggleCheckbox(id)}/>
			<label htmlFor={`color-checkbox-${id}`}>{name}</label>
		</div>
	)
}

export default CarSettingsCheckbox;