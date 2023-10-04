import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import MeditationTimer from "./components/MeditationTimer";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import customerReducer from './components/customerSlice';
import TermsAndConditions from "./components/TermsAndConditions";
import FAQ from "./components/FAQ"; // Import FAQ
import Demo from "./components/demo";
import userReducer from "./components/redux/UserSlice"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
const root = document.getElementById("root");
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user:userReducer,
  customers: customerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}> {/* Use 'store' here, not 'Store' */}
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FAQ" element={<FAQ />} /> {/* Use the imported 'FAQ' component */}
        <Route path="/about" element={<About />} />
        <Route path="/meditate" element={<MeditationTimer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/tac" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  </Provider>,
  root
);
