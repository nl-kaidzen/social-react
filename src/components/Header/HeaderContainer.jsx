import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMe } from './../../state/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return(
            <Header {...this.props} />    
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login
})
export default connect(mapStateToProps, { authMe })(HeaderContainer);