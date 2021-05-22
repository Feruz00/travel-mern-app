

import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
// import {Redirect} from 'react-router';

import Header from './components/Navbar/Header';
import Register from './components/Register/Register';



function App() {


  return (
    <>
      <Header />
      <div className = "main">
        
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/login" component={Login} /> */}
        
      </div>
      <div className="footer">
        All we reserved
      </div>
    </>  
  );
}

export default App;
