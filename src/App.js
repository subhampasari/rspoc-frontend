import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Panel1 from './Panel1/Panel1';
import Panel2 from './Panel2/Panel2';
import { connect } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
import Notifications, {notify} from 'react-notify-toast';

class App extends Component {
	componentDidMount() {

		// loads data into redux stores
		let url = process.env.REACT_APP_API_END_POINT + '/getEntities';
		console.log(url);
		fetch(url)
				.then(res => res.json())
				.then(
						(result) => {
								result.forEach((value) => {
										if(value.type === 'Experience')
										{
											this.props.addExp({exp : value.value, timestamp: value.timestamp})
										}
										else if(value.type === 'Product')
										{
											this.props.addProd({prod : value.value, timestamp: value.timestamp})
										}
										else if(value.type === 'Feature')
										{
											this.props.addFeat({feat : value.value, timestamp: value.timestamp})
										}
								});
						},
						(error) => {
								notify.show('Error occurred while fetching data! Please try again...'+error, "error");
								console.log(error);
						}
				)
	}

	render() {
		return (
			<div className="App">
				<Notifications />
				<Header />
				<Panel1 />
				<br></br>
				<Panel2 />
				<br></br><br></br>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addExp: ({exp, timestamp}) => {
			 dispatch({ 
				 type: 'ADD_EXP', payload: {
						exp,
						timestamp
					}}) 
		},
		addProd: ({prod, timestamp}) => {
			dispatch({ 
				type: 'ADD_PROD', payload: 
				{
					 prod,
					 timestamp
				}
			}) 
		},

		addFeat: ({feat, timestamp}) => {
			dispatch({ 
				type: 'ADD_FEAT', payload: 
				{
					 feat,
					 timestamp
				}
			}) 
		}
	}

}

export default connect(null, mapDispatchToProps)(App);
