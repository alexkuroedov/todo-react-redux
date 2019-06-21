import C from './constants'

//action creaters for clearify code
export const addItem = (label) => {
  let maxId = 100

  return {
    type: C.ADD_ITEM,
    label,
    important: false,
    done: false,
    id: maxId++,

  }
}

export const onDeleted = (id) => {
  return {
    type: C.DELETE_ITEM,
    id
  }
}

export const onToggleImportant = (id) => {
  return {
    type: C.TOGGLE_IMPORTANT,
    id
  }
}

export const onToggleDone = (id) => {
  return {
    type: C.TOGGLE_DONE,
    id
  }
}


export const setTerm = () => ({ type: C.SET_TERM })
export const setFilter = () => ({ type: C.SET_FILTER })
export const doImportant = () => ({ type: C.DO_IMPORTANT })
export const done = () => ({ type: C.DONE })


//action creaters for clearify code
// export const inc = () => ({type: 'INC'})
// export const dec = () => ({type: 'DEC'})
// export const rnd = (payload) => {

//   return  {
//       type: 'RND',
//       payload: Math.floor(Math.random() * 10)
//     }
// }

// export const addItem = (number) => {
//   let maxId = 100

//   return {
//     type: 'ADD',
//     label:'common',
//     important: false,
//     done: false,
//     id: maxId++,
//     number:number
//   }
// }