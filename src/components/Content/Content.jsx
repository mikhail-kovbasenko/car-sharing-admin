import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

const Content = () => {
	return <React.Fragment>Привет, авторизованный пользователь!:)</React.Fragment>
}

export default withAuthRedirect(Content);