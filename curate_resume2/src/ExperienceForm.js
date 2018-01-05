import React, { Component } from "react";

import "./App.css";
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

class ExperienceForm extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		if (this.props.experience) {
			this.state = this.props.experience;
		}
		else {
		this.state = {
			description: "",
			endMonth: "",
			endYear: 0,
			experienceOrg: "",
			isCurrent: false,
			location: "",
			startMonth: "",
			startYear: 0,
			title: ""
		};
		}
	}

	componentWillReceiveProps(newProps){
		if (newProps.experience) {
			this.setState(newProps.experience)
		} else {
			this.setState({

				description: "",
				endMonth: "",
				endYear: 0,
				experienceOrg: "",
				isCurrent: false,
				location: "",
				startMonth: "",
				startYear: 0,
				title: "",

			});

		}
	}


	update_description=(value)=>{
		this.setState({description:value});

	};
	update_endMonth=(value)=>{
		this.setState({endMonth:value});

	};
	update_endYear=(value)=>{
		this.setState({endYear:value});
	};
	update_experienceOrg=(value)=>{
		this.setState({experienceOrg:value});
	};
	update_title=(value)=>{
		this.setState({title:value});
	};
	update_startMonth=(value)=>{
		this.setState({startMonth:value});

	};
	update_startYear=(value)=>{
		this.setState({startYear:value});
	};
	update_location=(value)=>{
		this.setState({location:value});
	}

	save_details=()=>{

		
		var newExperience={
		
			description:this.state.description,
			endMonth:this.state.endMonth,
			endYear:this.state.endYear,
			experienceOrg:this.state.experienceOrg,
			isCurrent:this.state.isCurrent,
			location:this.state.location,
			startMonth:this.state.startMonth,
			startYear:this.state.startYear,
			title:this.state.title

		};
		this.props.update_experiences(newExperience);
	};

	render() 
	{
		const { formLayout } = this.state;

		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 12 }
		};

		const buttonItemLayout = {
			wrapperCol: { span: 10, offset: 4 }


		};
		const radioItemLayout={
			labelCol: { span: 4 },
			wrapperCol: { span: 4,offset:3 }

		}

		return (
			<div>
				<Form layout="horizontal">
				<FormItem label="Title" {...formItemLayout}>
					<Input type="text" value={this.state.title} onChange={(e)=>this.update_title(e.target.value)} />
				</FormItem>
				<FormItem label="Organization" {...formItemLayout}>
					
						<Input value={this.state.experienceOrg} type="textarea" onChange={(e)=>this.update_experienceOrg(e.target.value)} />
					
				</FormItem>

				<FormItem label="Location" {...formItemLayout}>
				<Input value={this.state.location} type="text" onChange={(e)=>this.update_location(e.target.value)} />
				</FormItem>

				<FormItem label="Start Month" {...formItemLayout}>
					<Select value={this.state.startMonth}  onChange={(value)=>this.update_startMonth(value)}>
						<Option value="January">January</Option>
						<Option value="February">February</Option>
						<Option value="March">March</Option>
						<Option value="April">April</Option>
						<Option value="May">May</Option>
						<Option value="June">June</Option>
						<Option value="July">July</Option>
						<Option value="August">August</Option>
						<Option value="September">September</Option>
						<Option value="October">October</Option>
						<Option value="November">November</Option>
						<Option value="December">December</Option>
					</Select>
				</FormItem>

				<FormItem label="Start Year" {...formItemLayout}>
					<Select value={this.state.startYear}  onChange={(value)=>this.update_startYear(value)}>
						<Option value="2018">2018</Option>
						<Option value="2017">2017</Option>
						<Option value="2016">2016</Option>
						<Option value="2015">2015</Option>
						<Option value="2014">2014</Option>
						<Option value="2013">2013</Option>
						<Option value="2012">2012</Option>
						<Option value="2011">2011</Option>
						<Option value="2010">2010</Option>
						<Option value="2009">2009</Option>
						<Option value="2008">2008</Option>
						<Option value="2007">2007</Option>
						<Option value="2006">2006</Option>
						<Option value="2005">2005</Option>
						<Option value="2004">2004</Option>
						<Option value="2003">2003</Option>
						<Option value="2002">2002</Option>
						<Option value="2001">2001</Option>
						<Option value="2000">2000</Option>
						<Option value="1999">1999</Option>
						<Option value="1998">1998</Option>
						<Option value="1997">1997</Option>
						<Option value="1996">1996</Option>
						<Option value="1995">1995</Option>
						<Option value="1994">1994</Option>
						<Option value="1993">1993</Option>
						<Option value="1992">1992</Option>
						<Option value="1991">1991</Option>
						<Option value="1990">1990</Option>
						<Option value="1989">1989</Option>
						<Option value="1988">1988</Option>
						<Option value="1987">1987</Option>
						<Option value="1986">1986</Option>
					</Select>
				</FormItem>

				<FormItem label="End Month" {...formItemLayout}>
					<Select value={this.state.endMonth}  onChange={(value)=>this.update_endMonth(value)}>
						<Option value="January">January</Option>
						<Option value="February">February</Option>
						<Option value="March">March</Option>
						<Option value="April">April</Option>
						<Option value="May">May</Option>
						<Option value="June">June</Option>
						<Option value="July">July</Option>
						<Option value="August">August</Option>
						<Option value="September">September</Option>
						<Option value="October">October</Option>
						<Option value="November">November</Option>
						<Option value="December">December</Option>
					</Select>
				</FormItem>

				<FormItem label="End Year" {...formItemLayout}>
					<Select value={this.state.endYear}  onChange={(value)=>this.update_endYear(value)}>
						<Option value="2018">2018</Option>
						<Option value="2017">2017</Option>
						<Option value="2016">2016</Option>
						<Option value="2015">2015</Option>
						<Option value="2014">2014</Option>
						<Option value="2013">2013</Option>
						<Option value="2012">2012</Option>
						<Option value="2011">2011</Option>
						<Option value="2010">2010</Option>
						<Option value="2009">2009</Option>
						<Option value="2008">2008</Option>
						<Option value="2007">2007</Option>
						<Option value="2006">2006</Option>
						<Option value="2005">2005</Option>
						<Option value="2004">2004</Option>
						<Option value="2003">2003</Option>
						<Option value="2002">2002</Option>
						<Option value="2001">2001</Option>
						<Option value="2000">2000</Option>
						<Option value="1999">1999</Option>
						<Option value="1998">1998</Option>
						<Option value="1997">1997</Option>
						<Option value="1996">1996</Option>
						<Option value="1995">1995</Option>
						<Option value="1994">1994</Option>
						<Option value="1993">1993</Option>
						<Option value="1992">1992</Option>
						<Option value="1991">1991</Option>
						<Option value="1990">1990</Option>
						<Option value="1989">1989</Option>
						<Option value="1988">1988</Option>
						<Option value="1987">1987</Option>
						<Option value="1986">1986</Option>
					</Select>
				</FormItem>

				<FormItem {...radioItemLayout}>
					<Radio >IsCurrent</Radio>
				</FormItem>

				<FormItem label="Description" {...formItemLayout}>
					<TextArea rows={4} value={this.state.description}  onChange={(e)=>this.update_description(e.target.value)}/>
				</FormItem>

				<FormItem {...buttonItemLayout}>
						<Button type="primary" onClick={(e)=>this.save_details()}>Save Details</Button>
					
				</FormItem>
			</Form>
			</div>
		);
	}
}
export default ExperienceForm;
