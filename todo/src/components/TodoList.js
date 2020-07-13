import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';

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
    }
    
    return (
        <div className='container'>
            <div className='todo-list'>
                <ul>
                    {
                        state.todoList.map(todo => {
                            return <li key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })} className={todo.completed ? 'completed' : ''}>{todo.item}</li>
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
            <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear completed</button>
        </div>
    )
}

export default TodoList;