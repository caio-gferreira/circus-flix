import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './routes/Home/HomePage';
import Page404 from './routes/Error/PageError';
import LoginPage from './routes/Login/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './components/Login/PrivateRoute/PrivateRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
  }, [isAuthenticated]);

  return (
        <BrowserRouter>
            <Routes>
                {/** Default Route */}
                <Route path="" element={<Navigate to="login" />} />
                <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                <Route
                    path="home"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
