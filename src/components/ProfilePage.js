import React from 'react';
import Search from './Search';
import ProfilePicture from './ProfilePicture';
import MenuBar from './MenuBar';
import PersonalInfo from './PersonalInfo'
import PersonToPositions from './PersonToPositions'


class ProfilePage extends React.Component{
	state = {
    is_profile: true
  };
	render(){
		return (
			<div>
				<MenuBar/>
				{(() => {
        switch (this.state.is_profile) {
          case true:   return <div><PersonalInfo/><PersonToPositions/></div>;
          case false: return <Search/>;
        }
      })()}
			</div>
		)
	}
}

export default ProfilePage;
