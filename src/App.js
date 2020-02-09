import React from 'react';
import './App.css';;

function App() {
	return (
		<div className="app-wrapper">
			<header className="header">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYE7BewC79Gd1f1iGCEjAe8ud21eRyNbxapSyJtvYPVZhaqHsM" alt="logo"/>
			</header>
			<nav className="nav">
				<ul>
					<li><button>Profile</button></li>
					<li><button>Messages</button></li>
					<li><button>News</button></li>
					<li><button>Music</button></li>
					<li><button>Settings</button></li>
				</ul>
			</nav>
			<main className="main-content">
				<img src="https://lh3.googleusercontent.com/proxy/u57nJ6lJto89C-Hn2ws_Eto7mSm6GTVsUcJQHSutyeodmFyyAWWmtg3IBwPEriHUcGpk2t9E1tx_CmJDZr08lUbla-2tO0Lgd8l5vTfEbQYOAthBEDNRGrfW" className="main-img" alt="background"/>

				<div className="user-info">
					<div className="user-avatar">
						<img src="https://static.secure.website/wscfus/8525698/4941086/urr0lhqrrlyojv0xyxwj-w885-o.jpg" alt="user avatar" className="user-ava-img"/>
					</div>
					<div className="user-about">
						about user
					</div>
				</div>
				<section>
					<div>New post</div>
					<section>My posts
						<article>Post 1</article>
						<article>Post 2</article>
						<article>Post 3</article>
					</section>
				</section>
			</main>

		</div>
	);
}

export default App;
