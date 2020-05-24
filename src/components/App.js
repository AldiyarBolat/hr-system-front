import React from 'react'
import ProfilePage from './profilePage/ProfilePage'
import SearchPage from './searchPage/SearchPage'
import MenuBar from './MenuBar'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component{
	render(){
		return (
			<div className="app">
				<MenuBar/>
				<Route exact path="/" component={SearchPage}/>
				<Route exact path="/profile" component={ProfilePage}/>
			</div>
		)
	}
}

export default App
 