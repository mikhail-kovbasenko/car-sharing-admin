import { useState } from "react";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import MainHeader from "./MainHeader";

const MainHeaderContainer = props => {
	const [title, setTitle] = useState(null);
	const [item, setItem] = useState(null);
	const [height, setHeight] = useState();

	const carSaved = useSelector(state => state.car.carSaved);

	useLayoutEffect(() => {
		if(props.sidebarTitle && props.sidebarTitle.current && props.sidebarItem && props.sidebarItem.current) {
			setTitle(props.sidebarTitle.current);
			setItem(props.sidebarItem.current);

			setTimeout(() => {
				if(props.sidebarTitle.current.offsetHeight !== 0) setHeight(props.sidebarTitle.current.offsetHeight);
				else setHeight(props.sidebarItem.current.offsetHeight);
			}, 0);

			const onResize = () => {
				if(title.offsetHeight !== 0) setHeight(title.offsetHeight);
				else setHeight(item.offsetHeight);
			}
			window.addEventListener('resize', onResize);

			return () => window.removeEventListener('resize', onResize)
		} else {
		}
	}, [title])
	return <MainHeader height={height} saved={carSaved}/>
}


export default MainHeaderContainer;