import * as React from 'react';

// 创建类型接口
export interface LinkProps {
    active: boolean,
    children: Element,
    onClick: () => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class Link extends React.PureComponent<LinkProps> {
    public render() {
        const { active, children, onClick } = this.props;

        return (
            <button onClick={onClick} disabled={active} style={{marginLeft: '4px'}}>
                {children}
            </button>
        )
    }
}

