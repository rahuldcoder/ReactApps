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

class EducationForms extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		if (this.props.education) {
			this.state = this.props.education;
		} else {
			this.state = {
				degree: "",
				description: "",
				educationOrg: "",
				endYear: 0,
				grade: "",
				major: "",
				startYear: 0
			};
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.education) {
			this.setState(newProps.education)
		} else {
			this.setState({
				degree: "",
				description: "",
				educationOrg: "",
				endYear: 0,
				grade: "",
				major: "",
				startYear:0
			});
		}
	}

	EducationForms_update_degree=(value)=> {
			this.setState({degree:value});
	};
	EducationForms_update_description=(value)=>{
			this.setState({description:value});
	};
	EducationForms_update_educationOrg=(value)=>{
			this.setState({educationOrg:value});
	};
	EducationForms_update_endYear=(value)=>{
			this.setState({endYear:value});
	};
	EducationForms_update_grade=(value)=>{
			this.setState({grade:value});
	};
	EducationForms_update_major=(value)=>{
			this.setState({major:value});
	};
	EducationForms_update_startYear=(value)=>{
			this.setState({startYear:value});
	};
	
	save_details=()=>{
		
		var newEducation={
			degree:this.state.degree,
			description:this.state.description,
			educationOrg:this.state.educationOrg,
			endYear:this.state.endYear,
			grade:this.state.grade,
			major:this.state.major,
			startYear:this.state.startYear,
		
			
		};
		this.props.update_educations(newEducation);
	
	};

	render() {
		const formLayout = "horizontal";
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
				<FormItem label="Education Organisation" {...formItemLayout}>
					<Input value={this.state.educationOrg} onChange={(e)=>this.EducationForms_update_educationOrg(e.target.value)} />

				</FormItem>
				
				<FormItem label="Degree" {...formItemLayout}>
					<Input value={this.state.degree}  type="text" onChange={(e)=>this.EducationForms_update_degree(e.target.value)} />
					
				</FormItem>

				<FormItem label="Major" {...formItemLayout}>
					<Input value={this.state.major}  type="text" onChange={(e)=>this.EducationForms_update_major(e.target.value)}/>
				</FormItem>

				<FormItem label="Grade" {...formItemLayout}>
					<Input value={this.state.grade}  type="text" onChange={(e)=>this.EducationForms_update_grade(e.target.value)} />
				</FormItem>

				<FormItem label="Start Year" {...formItemLayout}>
					<Select value={this.state.startYear} onChange={(value)=>this.EducationForms_update_startYear(value)}>
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
				
				<FormItem label="End Year" {...formItemLayout}>
					<Select value={this.state.endYear} onChange={(value)=>this.EducationForms_update_endYear(value)}>
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

				<FormItem label="Description" {...formItemLayout}>
					<TextArea value={this.state.description}  rows={4} onChange={(e)=>this.EducationForms_update_description(e.target.value)}/>
				</FormItem>

				<FormItem {...buttonItemLayout}>
						<Button type="primary" onClick={(e)=>this.save_details()}>Save Details</Button>
						
				</FormItem>
			</Form>
		
			</div>
		);
	}
}
export default EducationForms;
