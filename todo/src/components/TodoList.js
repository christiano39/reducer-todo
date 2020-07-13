import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';
import moment from 'moment'

const TodoList = props => {
    const [newTodoText, setNewTodoText] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodoText })
        setNewTodoText('');
        console.log(moment());
    }
    
    return (
        <div className='container'>
            <div className='todo-list'>
                <ul>
                    {
                        state.todoList.map(todo => {
                            return (
                                <div key={todo.id}>
                                <li  
                                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })} 
                                    className={todo.completed ? 'item completed' : 'item'}
                                >
                                    {todo.item} <span className='time-created'>(Created {moment(todo.id, 'MMDDYYYYHHmmss').fromNow()})</span>
                                </li>
                                {todo.completed && <span className='time-completed'>(Completed {todo.timeCompleted})</span>}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    value={newTodoText}
                    onChange={handleChanges}
                />&nbsp;
                <button>Add</button>
            </form>
            <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })} className='clear-button'>Clear completed</button>
        </div>
    )
}

export default TodoList;