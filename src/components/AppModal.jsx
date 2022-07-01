import React from 'react';
import {Modal} from 'antd'

const AppModal = ({title, visible, onOk, onCancel, children}) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel} footer={null}>
    {children}
  </Modal>
  )
}

export default AppModal