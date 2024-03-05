import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import { toggleRecordStatus } from '../../store/actions'
import './styles.css'

function RecordsList({
  records,
  'toggleRecordStatus': changeRecordStatus,
  filter,
}) {
  const handleToggleStatus = (id) => {
    changeRecordStatus(id)
  }

  const filteredRecords = () => {
    switch (filter) {
      case 'completed':
        return records.filter((record) => record.status === 'Completed')
      case 'current':
        return records.filter((record) => record.status === 'Not completed')
      default:
        return records
    }
  }

  return (
        <ul className="records-list">
            {filteredRecords().map(({ id, name, status }) => (
                <li key={id}>
                    <Card className="records-card">
                        <Card.Body>
                            <Card.Title
                                className="records-card-name"
                                onClick={() => handleToggleStatus(id)}
                            >
                                {name}
                            </Card.Title>
                            <Card.Text className={
                              status === 'Not completed' ? (
                                'records-card-status not-completed') : (
                                'records-card-status'
                              )}
                            >
                              {status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </li>
            ))}
        </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    'records': state.records,
    'filter': state.filter,
  }
}

export default connect(mapStateToProps, { toggleRecordStatus })(RecordsList)
