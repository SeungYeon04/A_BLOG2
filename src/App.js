import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from "./home/home"
import Post from './post/post';
import Header from './layout/header';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <main className="body">
          <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/blog" element ={<Post/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
