import { Component } from 'react';
import './App.css';
import { Posts } from './components/Posts';
import { loadPosts } from './utils/load-posts';

class App extends Component {
  state = { // esse é o estado, quando atualiza os filhos, atualiza o estado
    posts: []
  };
  // utilizado na requisição de dados de API
  async componentDidMount() { // executa após o componente ser montado 
    await this.loadPosts();
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
