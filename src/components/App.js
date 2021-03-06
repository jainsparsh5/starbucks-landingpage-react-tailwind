import React from 'react'
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';
import Signup from './Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <NavBar />
      <Routes>
      
      <Route path='/' element={<Hero />}></Route>
      <Route path='/signup' element={<AuthProvider>
                                        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
                                          <div className='w-100' style={{ maxWidth: "400px" }}>
                                            <Signup />
                                          </div>
                                        </Container>
                                      </AuthProvider>}>

      </Route>
      
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;