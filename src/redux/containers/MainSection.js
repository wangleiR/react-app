import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../component/MainSection'
import { getCompletedTodoCount } from "../selectors";

const mapStateToProps = state => ({
    todosCount: state.todos.length,
    completeCount: getCompletedTodoCount(state),
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)

