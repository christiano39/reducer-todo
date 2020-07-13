import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';

const TodoList = props => {
    const [newTodoText, setNewTodoText] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className='container'>
            <div className='todo-list'>
                <ul>
                    {
                        state.todoList.map(todo => {
                            return <li key={todo.id}>{todo.item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;