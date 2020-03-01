import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthData } from './../../state/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data;
                    this.props.setUserAuthData(id, email, login);
                }
            });
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
export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);