import C from './constants'

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

export const onFilterChange = (filterName) => {
  return {
    type: C.SET_FILTER,
    filterName
  }
}

export const onSearchChange = (e) => {
  const term = e.target.value
  return {
    type: C.SET_TERM,
    term
  }

}

