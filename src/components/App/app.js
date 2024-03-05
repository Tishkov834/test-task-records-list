import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainPage from '../../pages/MainPage/main-page'
import store from '../../store/store'
import './normalize.css'
import './styles.css'

function App() {
  return (
      <Provider store={store}>
        <MainPage />
      </Provider>
  )
}

export default App
