import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from 'redux';

import reducer from './reducers'; 

import Footer from './components/Footer'
import AddTodo from './container/AddTodo'
import VisibleTodoList from './container/VisibleTodoList'

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
