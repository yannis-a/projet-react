import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/header'



const App: React.FC = () => {

    return (
        <div className="App">
            <Header />
            Hello Word
        </div>
    );
}

export default App;
