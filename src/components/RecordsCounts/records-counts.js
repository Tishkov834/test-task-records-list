import { connect } from 'react-redux'

import './styles.css'

function RecordsCounts({ records }) {
  const countCompleted = () => {
    return records.filter((record) => record.status === 'Completed').length
  }

  const countUncompleted = () => {
    return records.filter((record) => record.status !== 'Completed').length
  }

  return (
        <div className="record-counts-wrapper">
            <p className="record-counts-wrapper-text">
                Completed: {countCompleted()}
            </p>
            <p className="record-counts-wrapper-text">
                Uncompleted: {countUncompleted()}
            </p>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    'records': state.records,
  }
}

export default connect(mapStateToProps)(RecordsCounts)
