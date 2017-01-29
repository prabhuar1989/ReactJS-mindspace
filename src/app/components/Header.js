import React from "react";

export class Header extends React.Component {
	render() {
		return(
               <nav className= "navbar navbar-default">
               		<div className= "container">
               			<div className= "navbar-header">
               				<ul className= "nav nav-tabs">
               					<li><a href="home">Home</a></li>
               					<li><a href="projects">Projects</a></li>
               					<li><a href="images">Images</a></li>
               					<li><a href="about">About</a></li>
               					<li><a href="settings">Settings</a></li>
               				</ul>
               			</div>
               		</div>
               </nav>
			);
	}
}