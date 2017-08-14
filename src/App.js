import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

//components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/Pages/homePage';
import Products from './Components/Pages/products';
import Contact from './Components/Pages/contact';

//includes
import './Assets/css/default.min.css';
class App extends Component {
  render() {
  	
    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/Products' component={Products}/>
      <Route exact path='/Contact' component={Contact}/>
      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
