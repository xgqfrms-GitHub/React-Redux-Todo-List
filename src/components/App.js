import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
