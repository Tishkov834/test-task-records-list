import { v4 as uuidv4 } from 'uuid'

const initialState = {
  'records': [
    {
      'id': 1,
      'name': 'Record1',
      'status': 'Completed',
    },
    {
      'id': 2,
      'name': 'Record2',
      'status': 'Not completed',
    },
  ],
  'filter': 'all',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      return {
        ...state,
        'records': [...state.records, { ...action.payload, 'id': uuidv4() }],
      }

    case 'TOGGLE_RECORD_STATUS':
      return {
        ...state,
        'records': state.records.map((record) => {
          return record.id === action.payload ? {
            ...record,
            'status': record.status === 'Completed' ? (
              'Not completed') : 'Completed',
          } : record
        }),
      }

    case 'SET_FILTER':
      return {
        ...state,
        'filter': action.payload,
      }

    default:
      return state
  }
}

export default rootReducer
