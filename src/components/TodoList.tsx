import * as React from 'react';

import Todo from './Todo';


// 创建类型接口
export interface Todos {
    id: number,
    completed: boolean,
    text: string
}

export interface TodoListProps {
    todos: Todos[],
    toggleTodo: (id: number) => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class TodoList extends React.PureComponent<TodoListProps> {
    public render() {
        const { todos, toggleTodo } = this.props;

        return (
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                ))}
            </ul>
        )
    }
}

