import { message } from 'antd';

export const addMessage = (msg, type) =>{
       type='error' && message.error(msg);

}