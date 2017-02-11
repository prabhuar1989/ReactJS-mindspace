import React from "react";

export class Project extends React.Component {
    render(){
        return(
            <div>
               <h3>This is the project Page !!</h3>
               <p> Project Id : {this.props.params.id}</p>
            </div>
        );
    }
}