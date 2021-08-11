import './CustomSettingsHeader.scss';

const CustomSettingsHeader = props => {
	const getCustomSettingsItem = props.items.map(item => {
		return (
			<div className="custom-settings__item">
				<select>
					<option value={item}>{item}</option>
				</select>
			</div>
		)
	})
	return (
		<div className="custom-settings">
			<div className="custom-settings__container">
				{
					getCustomSettingsItem
				}
			</div>
			{props.children}
		</div>
	)
}

export default CustomSettingsHeader;