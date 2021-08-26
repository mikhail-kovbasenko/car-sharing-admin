import './CustomTable.scss';
import CustomTbody from './CustomTbody';
import CustomThead from './CustomThead';

const CustomTable = props => {
	return (
		<div className="table-content">
			<div className="table-content__container">
				<table className="custom-table">
					<CustomThead list={props.list}/>
					<CustomTbody list={props.list}
									 items={props.items} 
									 checkProp={props.checkProp} 
									 handleClick={props.handleClick} 
									 history={props.history}
								/>
				</table>
			</div>
		</div>
	)
}

export default CustomTable;