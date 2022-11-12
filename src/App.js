import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Login from './Login';
import Registration from './Registration';
import Restaurent from './Restaurent';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <Router>  
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/signUp' element={< SignUp />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/registration' element={< Registration />}></Route>
                 <Route exact path='/restaurents' element={< Restaurent />}></Route>
          </Routes>
       </Router>
    </>
  );
}

export default App;
