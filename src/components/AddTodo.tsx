import * as React from 'react';

// 创建类型接口
export interface AddTodoProps {
    toggleAdd: (text: string) => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class AddTodo extends React.PureComponent<AddTodoProps> {
    public render() {
        const { toggleAdd } = this.props;

        let input: any

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        toggleAdd(input.value);
                        input.value = ''
                    }}
                >
                    <input ref={node => (input = node)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

