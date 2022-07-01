import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import {addMessage} from './Alert';
const AppDropdown = ({setStatus, setTodos, index, todos, status}) => {

  console.log(todos);

  const handleMenuClick = (e) =>{
    const newTodos = [...todos];
    if(e.key === '0'){
      setStatus('In Progress');
      if(todos[index].in_progress === true && todos[index].is_completed === false){
        addMessage('Already in progress state', 'error');
       }
       //if not in progress
       if(todos[index].in_progress === false ){
        newTodos[index].in_progress = true;
        newTodos[index].is_completed = false;
        setTodos(newTodos);
       }
    }
    if(e.key === '1'){
      setStatus('completed');
      if(todos[index].in_progress === true && todos[index].is_completed === false){
        newTodos[index].is_completed = true;
        newTodos[index].in_progress = false;
        setTodos(newTodos);
      }

      if(todos[index].in_progress === false && todos[index].is_completed === false){
        addMessage('First make in progress state', 'error')
      }
    }

  }


  const menu = (
    <Menu
    onClick={handleMenuClick}
      items={[
        {
          label:'In Progress',
          key: '0',
        },
        {
          label: 'Completed',
          key: '1',
        },
      ]}
    />
  );



  return (
    <Dropdown overlay={menu} trigger={['click']} >
    <p style={{color:'blue', cursor:'pointer'}} onClick={e => e.preventDefault()}>
      <Space>
        Status
        <DownOutlined />
      </Space>
    </p>
  </Dropdown>
  )
}

export default AppDropdown