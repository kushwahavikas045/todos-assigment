import { useState } from 'react'
import { List, Tag, Modal } from 'antd';
import AppDropdown from './AppDropdown';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AppSelect from './AppSelect';
import {
  CheckCircleOutlined,
  SyncOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import IconButton from './Button';
const { confirm } = Modal;

const Lists = ({ todos, setTodos }) => {
  const [status, setStatus] = useState('');
  const [filter, setFilter] = useState('');
  //delete todos
  const showDeleteConfirm = (index) => {
    confirm({
      title: 'Are you sure delete this todo?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      },

      onCancel() {
        console.log('Cancel');
      },
    });
  };


  return (
    <>
    <div style={{display: 'flex',justifyContent:'flex-end'}}>

      <AppSelect setFilter = {setFilter} todos = {todos}/>
    </div>
    <List
      itemLayout="horizontal"
      dataSource={filter === '' ? todos : filter}
      renderItem={(item, index) => (
        <List.Item style={{ padding: '10px 0px' }}
          actions={[<AppDropdown setStatus={setStatus} setTodos={setTodos} index={index} todos={todos} status={status} />]}
        >
          <List.Item.Meta
            title={<>{item.text} <small style={{ fontSize: '12px' }}>{item.date}</small></>}
            description={
              <>
                <IconButton
                  icon={<DeleteOutlined />}
                  type={'danger'}
                  title='Delete'
                  onClick={() => showDeleteConfirm(index)}
                />

              </>

            }
          />
          <div>
            {item.in_progress && <Tag icon={<SyncOutlined spin />} color="processing"> In progress update</Tag>}
            {item.is_completed && <Tag icon={<CheckCircleOutlined />} color="success"> completed</Tag>}

          </div>
        </List.Item>
      )}
    />
    </>
  )
}
export default Lists