import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar friends={props.state.sidebar.friends}/>
				<section className="app-router-container">
					<Route path='/profile' render={() => <Profile 
						posts={props.state.profilePage.posts}
						dispatch={props.dispatch}
						postValue={props.state.profilePage.newPostText}/>}/>
					<Route path='/messages' render={() => <Messages 
						dialogs={props.state.messagePage.dialogsData} 
						messages={props.state.messagePage.messageData}
						dispatch={props.dispatch}
						newMessageText={props.state.messagePage.newMessageText}/>}/>
				</section>
			</div>
		</BrowserRouter>
	);
}

export default App;
