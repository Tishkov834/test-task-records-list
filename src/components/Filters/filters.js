import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { setFilter } from '../../store/actions'
import './styles.css'

function Filters({ filter, 'setFilter': setFilterValue }) {
  const filterOptions = [
    {
      'key': 'all',
      'title': 'All',
    },
    {
      'key': 'completed',
      'title': 'Completed',
    },
    {
      'key': 'current',
      'title': 'Current',
    },
  ]
  const handleFilterChange = (newFilter) => {
    setFilterValue(newFilter)
  }

  return (
    <div className="filters-wrapper">
      {
        filterOptions.map(({ key, title }) => (
          <Button
            variant={filter === key ? 'primary' : 'light'}
            onClick={() => handleFilterChange(key)}
          >
            {title}
          </Button>))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    'filter': state.filter,
  }
}

export default connect(mapStateToProps, { setFilter })(Filters)
