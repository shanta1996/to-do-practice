
// import Shortcircuits from './components/Shortcircuits'
import ContactForm from './components/ContactForm'
import Counter from './components/Counter'
import Login from './components/Login'
import RctRegistration from './components/RctRegistration'
// import Registration from './components/Registration'
import Todo from './projects/todo/Todo'

const App = () => {
  return (
    <>
    <Todo />
    <Counter/>
    {/* <RctRegistration/>
    <Login/> */}
    <ContactForm/>
    {/* <Registration/>     */}
      {/* <Shortcircuits /> */}
    </>
  )
}

export default App