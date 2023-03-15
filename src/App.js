import './App.css'
import './style/all.css'
import Header from './components/Header'
import Main from './components/Main'
import Foot from './components/Foot'
import Back from './components/Back'
import"../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "./style/universal.css"


function App() {
  return (
    <div className=''>
        <Header/>
        <Main/>
        <Foot/>
        <Back/>
    </div>
  );
}

export default App;
