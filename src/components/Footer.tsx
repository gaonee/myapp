import * as React from 'react';

import FilterLink from '../container/FilterLink'
import { VisibilityFilters } from '../actions'

// 使用接口代替 PropTypes 进行类型校验
export default class Footer extends React.PureComponent {
    public render() {
        return (
            <div>
                <span>Show: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </div>
        )
    }
}

