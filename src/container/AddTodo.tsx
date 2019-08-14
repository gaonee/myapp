import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { addTodo } from '../actions'

interface ConnectProps {
    dispatch: Dispatch
}

const AddTodo = ( prop: ConnectProps ) => {
    let input: any

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    prop.dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
