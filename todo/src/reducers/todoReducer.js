export const initialState = {
    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: new Date(),
    },]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload !== ''){
                return {
                    ...state,
                    todoList: [
                        ...state.todoList,
                        {
                            item: action.payload,
                            completed: false,
                            id: new Date()
                        }
                    ]
                }
            }
            return state
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.map(itm => {
                    if (itm.id === action.payload.id){
                        return {
                            ...itm,
                            completed: !itm.completed 
                        }
                    }else {
                        return itm
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.filter(itm => {
                    return !itm.completed
                })
            }
        default:
            return state
    }
}