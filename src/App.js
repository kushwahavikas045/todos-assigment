import { PlusOutlined } from '@ant-design/icons';
import IconButton from './components/Button';
import './App.css';
import { Divider, Typography } from 'antd';
import { useState, useRef, useEffect } from 'react';
import AppModal from './components/AppModal';
import Create from './components/Create';
import {initialTodos} from './Todos';
import Lists from './components/Lists';
const { Title } = Typography;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[todos, setTodos] = useState(initialTodos);
  const input = useRef();

  useEffect(()=>{
    handleNewTodo();
  },[])
  //open modal
  function handleNewTodo(){
    setIsModalVisible(true);
    input.current.focus();
  }

  regitturn (
    <div className="container">
    <Typography>
    <Title>Todo App</Title>
    <Divider/>
      {/* button */}
     <IconButton title='Add todo' icon={<PlusOutlined/>} type="primary" onClick={handleNewTodo}/>
     {/* modal */}
     <AppModal visible={isModalVisible} title="Create todo" onCancel={() => setIsModalVisible(false)}>
      {/* create todo form */}
      <Create handleModal = {setIsModalVisible} setTodos={setTodos} todos={todos} ref={input}/>
     </AppModal>
     {/* todos list */}
     <Lists todos = {todos} setTodos={setTodos}/>
    </Typography>
    </div>
  );
}

export default App;
