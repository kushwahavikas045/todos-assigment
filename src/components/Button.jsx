import React from 'react';
import {Button} from 'antd'

const IconButton = ({icon, title, type, onClick}) => {
  return (
    <Button type={type} onClick={onClick} icon={icon}>
    {title}
  </Button>
  )
}

export default IconButton