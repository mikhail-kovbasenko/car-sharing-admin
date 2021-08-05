import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import Content from "./Content"

const ContentContainer = ({userId}) => {
	return <Content/>
}

const mapStateToProps = state => ({
	userId: state.auth.userId
})

export default compose(
	connect(mapStateToProps),
	withAuthRedirect
)(ContentContainer);