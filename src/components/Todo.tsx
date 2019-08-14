import * as React from 'react';


// 创建类型接口
export interface TodoProps {
    onClick: () => void,
    completed: boolean,
    text: string
}

// 使用接口代替 PropTypes 进行类型校验
export default class Todo extends React.PureComponent<TodoProps> {
    public render() {
        const { onClick, completed, text } = this.props;

        return (
            <li onClick={ onClick } style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                { text }
            </li>
        )
    }
}

