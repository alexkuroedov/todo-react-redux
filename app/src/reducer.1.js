import C from './constants'




const addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
        const newArray = [
            ...todoData,
            newItem
        ]

        return {
            todoData: newArray
        }
    })
}

const deleteItem = (id) => {
    this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id)
        const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
        ]

        return {
            todoData: newArray
        }
    })
}



const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
    ]

}

const onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
        return {
            todoData: this.toggleProperty(todoData, id, 'important')
        }
    })
}

const onToggleDone = (id) => {
    this.setState(({ todoData }) => {
        return {
            todoData: this.toggleProperty(todoData, id, 'done')
        }
    })
}

const search = (items, term) => {
    if (term.length === 0) {
        return items
    }

    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
}

const filter = (items, filter) => {

    switch (filter) {
        case 'all':
            return items
        case 'active':
            return items.filter((item) => !item.done)
        case 'done':
            return items.filter((item) => item.done)
        default:
            return items
    }
}

const onSearchChange = (term) => {
    this.setState({ term })
}

const onFilterChange = (filter) => {
    this.setState({ filter })

}


///////////////////////////////////////////////////////////
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


const reducer = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_TODO_DATA:
            return {
                label: action.label,
                important: action.important,
                done: action.done,
                id: action.id
            }


        case 'DEC':
            return state - 1
        case 'RND':
            return state + action.payload
        default:
            return initialState
    }
}

// export const reducer = (state = [], action) => {
//     switch (action.type) {
//         case C.ADD_COLOR:
//             return [
//                 ...state,
//                 color({}, action)
//             ]
//         case C.RATE_COLOR:
//             return state.map(
//                 c => color(c, action)
//             )
//         case C.REMOVE_COLOR:
//             return state.filter(
//                 c => c.id !== action.id
//             )
//         default:
//     }
//     return state
// }

export default reducer


