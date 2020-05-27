import React from 'react';
import Staff from './Staff'
import axios from 'axios';
import { MDBCol, MDBIcon } from "mdbreact";

class Search extends React.Component{
  state = {
    staff: null,
    loading: false,
    value: ''
  };
  search = async val => {
    this.setState({ loading: true });
    let res;
    console.log({ search_value: val });
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/search/',
      params: {
        "search_value": val
      },
    }).then((response) => {
        this.setState({staff: response['data']['staff'], loading: false});
        // console.log(response['data']['staff']);
      }, (error) => {
        console.log(error);
      });
    // console.log(res);
    // const staff = res;
    // this.setState({ staff, loading: false });
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
      <div>
      <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"
        value={this.state.value}
        onChange={e => this.onChangeHandler(e)}
        placeholder="Type something to search"/>
      </div>
    </MDBCol>
      {this.renderStaff}
      </div>
		)
	}
}

export default Search;
