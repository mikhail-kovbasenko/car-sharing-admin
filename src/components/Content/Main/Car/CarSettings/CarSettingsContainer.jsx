import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewColorItemActionCreator, toggleColorCheckboxActionCreator } from "./../../../../../redux/reducers/car/action-creators-car";
import CarSettings from "./CarSettings";

const CarSettingsContainer = ({formFieldData, deleteCar, updateForm, setFormFieldData, sendData, categoriesList}) => {
	const dispatch = useDispatch();

	const formFieldSettingsData = {...formFieldData};

	delete formFieldSettingsData['img'];
	delete formFieldSettingsData['description'];
	delete formFieldSettingsData['colorItems']

	const [colorsIdList, setColorsIdList] = useState([])

	const colorItems = useSelector(state => state.car.colorItems);
	const colorItemCurrentId = useSelector(state => state.car.colorItemCurrentId);

	const addNewColorCheckbox = prop => {
		if(prop.color === '') return;

		dispatch(addNewColorItemActionCreator({
			id: colorItemCurrentId,
			name: prop.color,
			checked: false
		}))
		prop.color = '';
	}
	const toggleCheckbox = id => {
		dispatch(toggleColorCheckboxActionCreator(id));

		if(colorsIdList.includes(id)) {
			const colorsIdListCopy = [...colorsIdList];
			const index = colorsIdListCopy.indexOf(id);

			colorsIdListCopy.splice(index, 1);

			setColorsIdList(colorsIdListCopy);
		} else {
			setColorsIdList([...colorsIdList, id]);
		}
	}
	useEffect(() => {
		if(colorItems.length < 1) return;

		const colorsIdList = colorItems.filter(item => {
			if(item['checked']) return item['id'];
		});
	
		setColorsIdList(colorsIdList);
	}, [])
	useEffect(() => {
		if(colorsIdList.length > 0) setFormFieldData({...formFieldData, colorItems: true})
		else setFormFieldData({...formFieldData, colorItems: null})
	}, [colorsIdList])
	useEffect(() => {
		const checked = colorItems.some(item => item.checked);
		
		switch(checked) {
			case true: setFormFieldData({...formFieldData, colorItems: true}); break;
			case false: setFormFieldData({...formFieldData, colorItems: null}); break;
		}
	}, [])
	useEffect(() => {
		if(colorsIdList.length < 1) {
			const checked = colorItems.some(item => item.checked);

			if(checked) setFormFieldData({...formFieldData, colorItems: true});
		}
	}, [colorsIdList])
	return <CarSettings formFieldSettingsData={formFieldSettingsData}
						     update={updateForm}
							  colorItems={colorItems}
							  toggleCheckbox={toggleCheckbox}
							  addNewColorCheckbox={addNewColorCheckbox}
							  categoriesList={categoriesList}
							  sendData={sendData}
							  deleteCar={deleteCar}
							/>
}

export default CarSettingsContainer;