import './CustomTable.scss';
import CustomTbody from './CustomTbody';
import CustomThead from './CustomThead';

const CustomTable = ({list, items, checkProp, handleClick, hisotry}) => {
	return (
		<div className="table-content">
			<div className="table-content__container">
				<table className="custom-table">
					<CustomThead list={list}/>
					<CustomTbody list={list}
									 items={items} 
									 checkProp={checkProp} 
									 handleClick={handleClick} 
									 history={history}
								/>
				</table>
			</div>
		</div>
	)
}

export default CustomTable;