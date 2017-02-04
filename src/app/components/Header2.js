import React from "react";

export const Header2 = (props) => {
		return(
			<div>
               <nav className= "navbar navbar-default">
               		<div className= "container">
               			<div className= "navbar-header">
               				<ul className= "nav nav-tabs">
                                   {props.links.map((link,i) =>  <li key={i}><a href={link}>{link}</a></li> )}
               				</ul>
               			</div>  
               		</div>
					<div className= "container">
						<div className = "navbar-header  col-xs-10 col-xs-offset-1">
							<a>Author : {props.author}</a>
						</div>   
               		</div>
               </nav>
			</div>
			);
}