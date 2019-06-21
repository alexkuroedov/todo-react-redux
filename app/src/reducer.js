import C from './constants'

let maxId = 100

const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: maxId++
    }
}


const initialState = {
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


const reducer = (state = initialState, action) => {
    let newState = { ...state }
    let newTodoData = []
    switch (action.type) {
        case C.ADD_ITEM:
            newState.todoData.push(
                {
                    label: action.label,
                    important: action.important,
                    done: action.done,
                    id: action.id
                }
            )
            return newState

        case C.DELETE_ITEM:
            newTodoData = state.todoData.filter((item) => {
                return item.id !== action.id
            })
            return { ...state, todoData: newTodoData }

        case C.TOGGLE_IMPORTANT:
            newTodoData = state.todoData.map((item) => {
                if(item.id === action.id){
                    item.important = !item.important                    
                }
                return item
            })
            return { ...state, todoData: newTodoData }
        case C.TOGGLE_DONE:
            newTodoData = state.todoData.map((item) => {
                if(item.id === action.id){
                    item.done = !item.done                    
                }
                return item
            })

            return { ...state, todoData: newTodoData }

        default:
            return state
    }
}

export default reducer