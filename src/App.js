import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Productts from './components/Productts';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Producttdetails from './components/Producttdetails';
import Header from './components/Header'
import Createproductt from './components/Createproductt'


function App() {
  return (
    <Router>
    <main className="py-3">
      <Header/>  
      <Container> 
        <Route exact path='/' component={Home}/>
        <Route path='/Productts/:id' component={Productts}/>
      <Route path='/pro/:id' component={Producttdetails}/> 
      <Route path='/Createproductt/:id/1' component={Createproductt}/>
      </Container>
    </main>
    </Router>
  );
}

export default App;
