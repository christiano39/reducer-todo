export const initialState = {
    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: new Date(),
    },]
};

export const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}