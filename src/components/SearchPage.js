import React from 'react'
import MenuBar from './MenuBar'
import Search from './Search'


class SearchPage extends React.Component{
	render(){
		return (
			<div>
				<MenuBar/>
				<Search/>
			</div>
		)
	}
}

export default SearchPage
