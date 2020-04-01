import React from 'react';
import './App.css';

import Authorization from './pages/authorization/Authorization';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Books from './pages/books/Books';
import Profile from './pages/profile/Profile';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Authorization />
            <Registration />
            <Header />
            <Home />
            <Categories />
            <Books />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
