import React from 'react'
import ProfilePage from './ProfilePage'
import SearchPage from './SearchPage'
import MenuBar from './MenuBar'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



class SearchPage extends React.Component{
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

export default SearchPage
 