import React from "react";

export class Home extends React.Component {

	 constructor(props){
		 super();
		 this.state = {
			 age : props.age,
			 status : 0,
			 newLinks : ["NewHome" , "NewCareer" , "NewAbout" , "NewSettings"]
		 };

		 setTimeout(() => {
			 this.setState({
				 status : 1
			 })
		 },3000);
		}
		
	 makeOlder(){
		 this.setState({
			 age : this.state.age + 3
		 });
	 }


      replaceLinks(){
           this.props.changeLinks(this.state.newLinks);
	  }

     render(){
     	return (
     			<div>
     				<p>This is a Home Component !!</p>
					   <p> Hi! I am {this.props.name}. 
					    I am {this.state.age} years old.</p>
						<hr />
						<p>status : {this.state.status}</p>
						<button className="btn btn-primary" onClick={() => this.makeOlder()}> make me older!!</button>

					   <p> I have a friend named {this.props.friend.name}. He is {this.props.friend.age} years old !<br /> 
					        and his hobbies include : </p> 
						<div>
						    <h4>Hobbies : </h4>
							<ul>
							   {this.props.friend.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
							</ul>
						</div>

						<div>
							<button className="btn btn-primary" onClick = {this.props.greet}>Greet your friend</button>
						</div>	
						<hr />
						<div>
							<button className = "btn btn-primary" onClick = {this.replaceLinks.bind(this)}>Change Header Links</button>
						</div>
     			</div>
     		);
     }
}

Home.PropTypes = {
	name : React.PropTypes.string,
	age : React.PropTypes.number,
	friend : React.PropTypes.object,
	greet : React.PropTypes.func,
	changeLinks : React.PropTypes.func
};