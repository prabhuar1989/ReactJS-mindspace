import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
		return(
               <nav className= "navbar navbar-default">
               		<div className= "container">
               			<div className= "navbar-header">
               				<ul className= "nav nav-tabs">
								<li><Link to={"/home"} activeStyle={{color : "violet"}}>{props.home}</Link></li>
								<li><Link to={"/project/8"} activeStyle={{color : "red"}}>Project</Link></li>
               					<li><a href="images">Images</a></li>
               					<li><a href="about">About</a></li>
               					<li><a href="settings">Settings</a></li>
               				</ul>
               			</div>
               		</div>
               </nav>
			);
	};

	Header.props = {
		home : React.PropTypes.string
	}
