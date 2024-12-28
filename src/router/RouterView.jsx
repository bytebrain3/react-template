
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "@page/Home"
import Test from "@page/Test.jsx"
import Login from "@page/Login"
import NotFound from "@page/NotFound"


const RouterView = () => {
  return (
    <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* Test Route */}
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default RouterView;