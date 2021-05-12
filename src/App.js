import { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1',
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2',
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3',
      },
    ]
  };

  timeoutUpdate = null;
  // utilizado na requisição de dados de API
  componentDidMount() { // executa após o componente ser montado 
    this.handleTimeout();
  }

  componentDidUpdate() { // É chamado quando o componente é atualizado
    this.handleTimeout();
  }

  componentWillUnmount() { // executa antes do componente ser desmontado
    clearTimeout(this.timeoutUpdate); // Limpa o lixo deixado pelo Timeout
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou';
    posts[1].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 2000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <Fragment key={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.body}</p>
          </Fragment>
        ))}
      </div>
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
