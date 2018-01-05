import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import { DatePicker } from "antd";
import EducationForms from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import StartingForm from "./StartingForm.js";
import { Table,  Divider } from 'antd';
import Skills from './Skills';
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

const StartingResumeForm = Form.create()(StartingForm);

class App extends Component {
	constructor() {
		super();
		this.state = {
			formLayout: "horizontal",
			name: "",
			email: "",
			contact_number: [],
			current_location: "",
			years_of_exp: 0,
			current_company: "",
			summary: "",
			educations: [],
			experiences: [],
			skills: []
		};
		this.editing_education_id = -1;
		this.editing_experience_id =  -1;
	}
	
	delete_educations=(idx)=>{
		var arr= this.state.educations.slice();
		arr.splice(idx,1);
		this.setState({educations:arr});
		this.editing_education_id=-1;
	
	};

	delete_experiences=(idx)=>{
		var arr= this.state.experiences.slice();
		arr.splice(idx,1);
		this.setState({experiences:arr});
		this.editing_experience_id=-1;

	};

	edit_educations=(idx)=>{
		this.editing_education_id=idx;
		const education = this.state.educations[idx];
		this.setState({educationForm: education});
	};

	edit_experiences=(idx)=>{
		this.editing_experience_id=idx;
		const experience = this.state.experiences[idx];
		
		this.setState({experienceForm: experience});

	};
	

	update_name=(value)=>{
		this.setState({name:value});
	};
	update_email=(value)=>{
		this.setState({email:value});
	};
	update_contact_number=(value)=>{
		this.setState({contact_number:value});
	};
	update_current_location=(value)=>{
		this.setState({current_location:value});
	};
	update_years_of_exp=(value)=>{
		this.setState({years_of_exp:value})
	};
	update_current_company=(value)=>{
		this.setState({current_company:value});
	};
	update_summary=(value)=>{
		this.setState({summary:value});
	};
	update_educations=(value)=>{
		
		var arr="";
		if(this.editing_education_id<0){
			arr = this.state.educations.slice();
			arr.push(value);
			this.setState({educations:arr});
		}
		else
		{
		  arr=this.state.educations.slice();
		  arr.splice(this.editing_education_id,1,value);
		  this.editing_education_id=-1;
		  this.setState({educations:arr});
		} 
	};
	update_experiences=(value)=>{
		var arr="";
		if(this.editing_experience_id < 0){	
		  arr =this.state.experiences.slice();
		  arr.push(value);
		  this.setState({experiences:arr});
		}
		else
		{
		  arr =this.state.experiences.slice();
		  arr.splice(this.editing_experience_id, 1, value);
		  this.editing_experience_id = -1;
		  this.setState({experiences:arr});
		}

	};
	update_skills=(value)=>{
		console.log(value);
		this.setState({skills:value});
		
	};

	display_educations=()=>{
				
		const columns = [
			{
				title: 'educationOrg',
				dataIndex: 'educationOrg',
				key: 'educationOrg',
			},
			{
				title: 'degree',
				dataIndex: 'degree',
				key: 'degree',
			},
			{
				title: 'major',
				dataIndex: 'major',
				key: 'major',
			},

			{
				title: 'grade',
				dataIndex: 'grade',
				key: 'grade',
			},
			{
				title: 'startYear',
				dataIndex: 'startYear',
				key: 'startYear'
			},


			{
				title: 'endYear',
				dataIndex: 'endYear',
				key: 'endYear',
			}, {
				title: 'description',
				dataIndex: 'description',
				key: 'description',
			},
			{
				title:'edit',
				dataIndex:'edit',
				key:'edit'
			},
			{
				title:'delete',
				dataIndex:'delete',
				key:'delete'
			}

		

		];
		this.state.educations.forEach( (element,idx) => {
			 element.edit =	<FormItem>
			 <Button type="primary" onClick={(e)=>this.edit_educations(idx)}>Edit Details</Button>
			</FormItem>
			element.delete=<FormItem>
			<Button type="primary" onClick={(e)=>this.delete_educations(idx)}>delete Details</Button>
		   </FormItem>
			 
		 });
		  		  
		  return(
			<div>
				<Table dataSource={this.state.educations} columns={columns} />
			</div>			
		  );

	};


	
	display_experiences=()=>{
		  
		const columns = [
			{
				title: 'title',
				dataIndex: 'title',
				key: 'title',
			},
			{
				title: 'experienceOrg',
				dataIndex: 'experienceOrg',
				key: 'experienceOrg',
			},
			{
				title: 'location',
				dataIndex: 'location',
				key: 'location',
			},

			{
				title: 'startMonth',
				dataIndex: 'startMonth',
				key: 'startMonth',
			},
			{
				title: 'startYear',
				dataIndex: 'startYear',
				key: 'startYear'
			},


			{
				title: 'endMonth',
				dataIndex: 'endMonth',
				key: 'endMonth',
			}, {
				title: 'endYear',
				dataIndex: 'endYear',
				key: 'endYear',
			},
			{
				title: 'Description',
				dataIndex: 'description',
				key: 'description',
			},
			{
				title:'edit',
				dataIndex:'edit',
				key:'edit'
			},
			{
				title:'delete',
				dataIndex:'delete',
				key:'delete'
			}

		];
		this.state.experiences.forEach( (element,idx) => {
			element.edit =	<FormItem>
			<Button type="primary" onClick={(e)=>this.edit_experiences(idx)}>Edit Details</Button>
		   </FormItem>
		   element.delete=<FormItem>
		   <Button type="primary" onClick={(e)=>this.delete_experiences(idx)}>delete Details</Button>
		  </FormItem>
			
		});
		  		  
		  return(
			<div>
				<Table dataSource={this.state.experiences} columns={columns} />
			</div>			
		  );

	};

	get_data = () => {
		axios.get('/api/resume')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

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
				<button onClick={this.get_data}></button>
				<StartingResumeForm  update_name={this.update_name} update_email={this.update_email} update_contact_number={this.update_contact_number}
				update_current_location={this.update_current_location} update_summary={this.update_summary} update_years_of_exp={this.update_years_of_exp} update_current_company={this.update_current_company}/>
				<pre>
				name={this.state.name}<br/>
				email={this.state.email}<br/>
				contact_number={this.state.contact_number}<br/>
				current_location={this.state.current_location}<br/>
				years_of_exp={this.state.years_of_exp}<br/>
				summary={this.state.summary}<br/>
				current_company={this.state.current_company}<br/>

				</pre>
				
				<h4>Education Form :</h4>
			
					<EducationForms education={this.state.educationForm} update_educations={this.update_educations} />
			
				{this.display_educations()}

				<h4>Experience Form  :</h4>
				
				<ExperienceForm experience={this.state.experienceForm}  update_experiences={this.update_experiences}/>
				
				{this.display_experiences()}

				<Skills update_skills={this.update_skills}/>

			</div>
		);
	}
}

export default App;
