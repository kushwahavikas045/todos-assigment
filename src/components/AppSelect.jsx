import { Select } from 'antd';
const { Option } = Select;


const AppSelect = ({ setFilter, todos }) => {

    const onChange = (value) => {
        if (value === 'Task_Name') {
            const sort = todos.sort((a, b) => {
                if (a.text.toLowerCase() < b.text.toLowerCase()) return -1;
                if (a.text.toLowerCase() > b.text.toLowerCase()) return 1;
                return 0;
            })
            setFilter(sort);
        }
        if (value === 'task_id') {

        }
    };

    return (

        <Select
            placeholder="Filter by"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            <Option value="Task_Name">Task Name [A-Z]</Option>
            <Option value="task_id">TaskId</Option>

        </Select>
    )
};

export default AppSelect;