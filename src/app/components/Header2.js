import React from "react";

export const Header2 = (props) => {
		return(
               <nav className= "navbar navbar-default">
               		<div className= "container">
               			<div className= "navbar-header">
               				<ul className= "nav nav-tabs">
                                   {props.links.map((link,i) =>  <li key={i}><a href={link}>{link}</a></li> )}
               				</ul>
               			</div>
               		</div>
               </nav>
			);
}