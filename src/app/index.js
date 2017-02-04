import React from "react";
import { render } from "react-dom";

import { Header} from "./components/Header";
import { Header2} from "./components/Header2";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            links : ["Home","Career","About","Settings"],
            author : "Ashwin Prabhu"
        };
    }

    greetFriend(){
        alert("Hello friends !!");
    }

    changeLinks(newLinks){
        this.setState({
            links : newLinks
        });
    }

    changeAuthor(newAuthor){
        this.setState({
             author : newAuthor
        });
    }

    render() {
        var siddhesh = {
            name : "Siddhesh",
            age : "28", 
            hobbies : ["singing" , "reading books"]
        }

    	return (
             <div className = "container">

                  <div className = "row">
                     <div className = "col-xs-10 col-xs-offset-1">
                        <Header2 links={this.state.links} author={this.state.author}/>
                     </div>
                  </div>

                <div className = "row">
                   <div className = "col-xs-10 col-xs-offset-1">
                      <Home 
                      name={"Ashwin"} 
                      age={27} 
                      friend={siddhesh} 
                      greet={this.greetFriend} 
                      changeLinks={this.changeLinks.bind(this)}
                      author={this.state.author} 
                      changeAuthor={this.changeAuthor.bind(this)}/>
                   </div>
                </div> 
                
             </div>
    		);
    }

}

render(<App/>, window.document.getElementById("app")); 

