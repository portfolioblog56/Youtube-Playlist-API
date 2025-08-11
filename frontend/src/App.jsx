import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import HomeComponent from './components/Home';
import Input from './components/Input';
import DataShow from './components/DataShow';

function App() {
  return (
    <Router>
      <Navbar />
      <Fragment className="overflow-hidden">
        <div className="p-2 mt-4">
          <ToastContainer 
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/fetcher" element={<Input />} />
            <Route path="/show" element={<DataShow />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
