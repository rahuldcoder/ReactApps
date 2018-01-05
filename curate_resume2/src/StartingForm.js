import React, { Component } from "react";
import "./App.css";

import { DatePicker } from "antd";
import {
	Calendar,
	Form,
	InputNumber,
	Input,
	Tooltip,
	Radio,
	Icon,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
	Modal
} from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;
const InputGroup = Input.Group;

class StartingForm extends React.Component {
	constructor() {
		super();
		this.state = {
			formLayout: "horizontal",
			name: "",
			email: [],
			contact_number: [],
			current_location: "",
			years_of_exp: 0,
			current_company: "",
			summary: ""
		};
	}



	starting_update_name=(value)=>{
		this.setState({name:value});
	};
	starting_update_email=(value)=>{
		this.setState({email:value});
	};
	starting_update_contact_number=(value)=>{
		this.setState({contact_number:value});
	};
	starting_update_current_location=(value)=>{
		this.setState({current_location:value});
	};
	starting_update_years_of_exp=(value)=>{
		this.setState({years_of_exp:value});
	};
	starting_update_current_company=(value)=>{
		this.setState({current_company:value});
	};
	starting_update_summary=(value)=>{
		this.setState({summary:value});
	};
	save_details=()=>{
		this.props.update_name(this.state.name);
		this.props.update_email(this.state.email);
		this.props.update_contact_number(this.state.contact_number);
		this.props.update_current_location(this.state.current_location);
		this.props.update_summary(this.state.summary);
		this.props.update_years_of_exp(this.state.years_of_exp);
		this.props.update_current_company(this.state.current_company);
	}


	render() {
		const { formLayout } = this.state;

		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 12 }
		};

		const buttonItemLayout = {
			wrapperCol: { span: 10, offset: 4 }
		};

		return (
			<div>
				<Form layout={formLayout}>
					<FormItem label="Name" {...formItemLayout}>
					{/*<Input  placeholder="Enter Name" onChange={this.props.update_years_of_exp} />*/}
						{/*<h1>StartingForm Data: {this.state.name}</h1>*/}
						<Input  placeholder="Enter Name"  onChange={(e) => this.starting_update_name(e.target.value )} />
						
					</FormItem>

					<FormItem label="Email" {...formItemLayout}>
						<Input value={this.state.email}  placeholder="Enter Email" onChange={(e)=>this.starting_update_email(e.target.value)} />
					</FormItem>

					<FormItem label="Contact Number" {...formItemLayout}>
						<Input value={this.state.contact_number} placeholder="Enter contact number" onChange={(e)=>this.starting_update_contact_number(e.target.value)} />
					</FormItem>

					<FormItem label="Current Location" {...formItemLayout}>
						<Input value={this.state.current_location} placeholder="Enter current location" onChange={(e)=>this.starting_update_current_location(e.target.value)} />
					</FormItem>

					<FormItem label="Years of experience" {...formItemLayout}>
						<Input value={this.state.years_of_exp} placeholder="Enter years of experience" onChange={(e)=>this.starting_update_years_of_exp(e.target.value)}  />
					</FormItem>

					<FormItem label="Current Company" {...formItemLayout}>
						<Input value={this.state.current_company} placeholder="Enters current company" onChange={(e)=>this.starting_update_current_company(e.target.value)} />
					</FormItem>

					<FormItem label="Summary" {...formItemLayout}>
						<TextArea value={this.state.summary} rows={4} onChange={(e)=>this.starting_update_summary(e.target.value)} />
					</FormItem>

					
					<FormItem {...buttonItemLayout}>
						<Button type="primary" onClick={(e)=>this.save_details()}>Save Details</Button>
					</FormItem>

			
				</Form>
			</div>
		);
	}
}

export default StartingForm;
