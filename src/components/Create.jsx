import React from 'react'
import moment from 'moment';
import { Form, Input, Button } from 'antd';
import {addMessage} from './Alert';

const Create = ({handleModal, setTodos, todos}) => {
    const [form] = Form.useForm();

    //check dublicate todo
    const checkDublicateTodo = (text) =>{
        todos.forEach((todo) =>{
            if(todo.text === text){
                addMessage('dublicate todo not allowed', 'error');
                setTodos([...todos]);
            }else{
                setTodos([...todos, {text, in_progress: false, is_completed: false, date: moment().format('LLL')}]);
                handleModal(false);
                form.resetFields();
            }
        })
    }
    const onFinish = (values) => {
         const{text} = values;
         checkDublicateTodo(text);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
        form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Title"
                name="text"
                rules={[{ required: true, message: 'Please input your todo!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 3, span: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    )
}

export default Create