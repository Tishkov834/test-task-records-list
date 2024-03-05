export const addRecord = (record) => {
  return {
    'type': 'ADD_RECORD',
    'payload': record,
  }
}

export const toggleRecordStatus = (id) => {
  return {
    'type': 'TOGGLE_RECORD_STATUS',
    'payload': id,
  }
}

export const setFilter = (filter) => {
  return {
    'type': 'SET_FILTER',
    'payload': filter,
  }
}
