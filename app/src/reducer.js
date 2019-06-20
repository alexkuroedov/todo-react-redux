const maxId = 100

const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: maxId++
    }
}

let state = {

    todoData: [
        createTodoItem('Go Shopping'),
        createTodoItem('Wash the car'),
        createTodoItem('Do some work'),
        createTodoItem('Meet a nice person'),
        createTodoItem('Play with cat'),
    ],
    term: '',
    filter: 'all'
}

const reducer = (state=state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RND':
            return state + action.payload
        default:
            return state
    }
}

export default reducer