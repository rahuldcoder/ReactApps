import { Select,Form } from 'antd';
import React from 'react';
const Option = Select.Option;
const FormItem = Form.Item;

class Skills extends React.Component {

handleChange=(value) => {
    
    this.props.update_skills(value);
}


    render() {
        const formLayout  = "horizontal";

		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 12 }
		};

		const buttonItemLayout = {
            wrapperCol: { span: 10, offset: 4 }
        };

        return (
            <Form layout="horizontal">
            <FormItem label="Skills" {...formItemLayout}>
            <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Tags Mode"
                onChange={(value)=>this.handleChange(value)}
            >
                
            </Select>
            </FormItem>
            </Form>
        );
    }
}
export default Skills;