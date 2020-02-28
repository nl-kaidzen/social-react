import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar friends={props.state.sidebar.friends} />
			<section className="app-router-container">
				<Route path='/profile' render={() => <ProfileContainer
					posts={props.state.profilePage.posts} />} />
				<Route path='/messages' render={() => <Messages
					dialogs={props.state.messagePage.dialogsData}
					messages={props.state.messagePage.messageData}
					newMessageText={props.state.messagePage.newMessageText} />} />
				<Route path='/users' render={() => <UsersContainer />} />
			</section>
		</div>
	);
}

export default App;
