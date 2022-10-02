import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, ] = useState([
    {id: 1, title: "JS", body: "123123"},
    {id: 2, title: "Python", body: "121233123"},
    {id: 3, title: "123", body: "12312312312123"},
  ]);

  return (
    <div className="App">
      <PostForm/>
      <PostList posts={posts} title={"Post List"} />
    </div>
  );
}

export default App;
