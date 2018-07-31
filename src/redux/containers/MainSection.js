import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../component/MainSection'


const mapStateToProps = state => ({
    todosCount: state.todos.length,
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)

