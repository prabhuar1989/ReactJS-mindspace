Git Repo : https://github.com/prabhuar1989/ReactJS-mindspace


webpack - helps in bundling the code all ur assets like js, css and also transform it and set the project
Babel - is ES6 (Javascript version) transpiler to ES5.


ReactJs - views - single components

Angular JS - JS for single page application
 control the  navigaton between pages
 routing support


/********************Steps for setup ******************************************************************/
1. Create a folder with project name.
2. Download nodejs and Instal nodejs
3. Run the following commands at the project location
 
npm init  //initialize the project by giving required parameters

npm install react react-dom --save
//node_modules folder is created and all the required production libs are downloaded by npm 
// Also a new file is created - package.json - dependency entries are added here..

npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev
//Now install dev dependencies like webpack and webpack-dev-server and babel-loader 
//others babel libs define babel commands with logic defined
//This dev dependencies wont be deployed in server.. and only used during dev

4.Import the project in your IDE (sublime text).
5. Configure all the required variables in webpack-config.js as follows : 

var path = require("path");    //import the path library

var DIST_DIR = path.resolve(__dirname,"dist"); // declare destination folder using path variable.
var SRC_DIR = path.resolve(__dirname,"src");  // declare source folder using path variable.

var config = {                                 //config object specifying entry file, ouput object , and modules (if any)
     entry: SRC_DIR +"/app/index.js",               //entry file
     output: {                                      //output object specifying path , filename and public path
     	path: DIST_DIR + "/app",
     	filename: "bundle.js",
     	publicPath: "/app/"
     },
     modules: {                              
     	loaders: [
            {
            	test: /\.js?/,
            	include: SRC_DIR,
            	loader: "babel-loader",
            	query: {
            		presets: ["react", "es2015", "stage-2"]
            	}
            } 
     	]

     }

};

module.exports = config;

6. Add the script commands in package.json as follows : 

{
  "name": "reactjs-basics",
  "version": "1.0.0",
  "description": "react js basics",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run build",
    "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot",
    "build:prod": "webpack -p && cp src/index.html dist/index.html"
  },
  "keywords": [
    "reactjs"
  ],
  "author": "Ashwin",
  "license": "ISC",
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },
  "devDependencies": {
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "babel-preset-stage-2": "^6.22.0",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}


7. run npm start on npm command line window.

8. The webpack-dev-server is up and running.


/*** Chap 3 :  First Component ***/

1. Create App class which extends React.Component in index.js file.
2.  implement what this component shoulf render when used.
3. Use the above defined component by actually using it in the same file (atleast in this case) by using render{what,where} from render-dom library.
4. Save & Refresh the page

Note : Only 1 element <div> can be returned by the component in the js!
And to add some styling, go to getBootstrap.com


/** Chap 4 : Multiple Components ***/

1. create 2 js files in new components folder - namely Header.js and Home.js
2. create navbar in header and plain text in home
3. import both the components in the index.js and use them as elements

/** Chap 5 : Outputting Dynamic data ***/

/** Chap 6 : Passing data with Props **/

1. Passing data from one component to other using Props - like string, number, array or an object.
2. Using propTypes for data validation.


/** Chap 7 : event - onClick **/

/** Chap 8 : state of the application */

/* Chap 9 : communicating with the dom */
whole dom doesnt getrerendered.
reactjs uses virtual dom

/* Chap 10 : stateless components */
using const from es6 js with the arrow function.

/* Chap 11 : Passing function as prop from parent to child component */



<li><a href="projects">Projects</a></li>
               					<li><a href="images">Images</a></li>
               					<li><a href="about">About</a></li>
               					<li><a href="settings">Settings</a></li>


/***** till Chap 14 : initial index.js  *****************/

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






/* Chap 14  : Component Lifecycle methods  **/

componentwillMount()
componentDidMount()
componentWillReceiveProps(nextProps)
shouldComponentUpdate()
componentWillUpdate()
componentDidUpdate()
componentWillUnmount()

/** Chap 15 : Introducing Router **/
 npm install --save react-router


