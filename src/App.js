import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import { UserAuthContextProvider } from './context/UserAuthContext';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    // Wrap the entire Routes component or even higher in the tree with UserAuthContextProvider
    
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/" element={<Login />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
