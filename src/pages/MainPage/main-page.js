import AddForm from '../../components/AddForm/add-form'
import Filters from '../../components/Filters/filters'
import RecordsCounts from '../../components/RecordsCounts/records-counts'
import RecordsList from '../../components/RecordsList/records-list'
import './styles.css'

function MainPage() {
  return (
      <div className="layout">
        <AddForm/>
          <div className="manage-wrapper">
              <Filters/>
              <RecordsCounts/>
          </div>
          <RecordsList/>
      </div>
  )
}

export default MainPage
