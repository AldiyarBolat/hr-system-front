import React from 'react';
import Staff from './Staff'
import { MDBCol, MDBIcon } from "mdbreact";

class Search extends React.Component{
  state = {
    staff: null,
    loading: false,
    value: ''
  };
  search = async val => {
    this.setState({ loading: true });
    const res = [{'name':'Sanzhar'},{'name':'Aldiyar'},{'name':'Adilkhan'},{'name':'Adlet'}];
    const staff = res;
    this.setState({ staff, loading: false });
  };
  onChangeHandler = async e => {
    console.log(e.target.value);
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };
  get renderStaff() {
    let staff = <h1>There's no staff</h1>;
    if (this.state.staff) {
      staff = <Staff list={this.state.staff} />;
    }
    return staff;
  }
	render(){
		return (
      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input
            value={this.state.value}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Type something to search"
          />
          {this.renderStaff}
        </form>
      </MDBCol>
		)
	}
}

export default Search;
