import React, { useState, useEffect, useRef, useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// Header Component
function Header({ title }) {
  return <h1>{title}</h1>;
}

// Content Component (Random Joke)
function Content() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the chicken join a band? Because it had the drumsticks!"
  ];
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    const index = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[index]);
  };

  return (
    <div>
      <button onClick={getJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

// Footer Component
function Footer() {
  return <footer>© 2025 React Lab. All rights reserved.</footer>;
}

// StyledButton - Inline, Internal, External Styling
function StyledButton() {
  const internalStyle = `
    .internal-btn {
      background-color: green;
      color: white;
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }
  `;
  const inlineStyle = {
    backgroundColor: 'blue',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <>
      <button style={inlineStyle}>Inline Styled</button>
      <style>{internalStyle}</style>
      <button className="internal-btn">Internal Styled</button>
      <button className="styled-btn">External Styled</button>
    </>
  );
}

// LifecycleDemo Class Component
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
      </div>
    );
  }
}

// Counter with useState & useReducer
function Counter() {
  const [count, setCount] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'inc': return state + 1;
      case 'dec': return state - 1;
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>useState Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <h3>useReducer Count: {state}</h3>
      <button onClick={() => dispatch({ type: 'inc' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrease</button>
    </div>
  );
}

// JokeFetcher using useEffect
function JokeFetcher() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h3>{joke}</h3>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
}

// RefFocusForm using useRef
function RefFocusForm() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

// useContext Theme Example
const ThemeContext = createContext();

function ThemeContextDemo() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-${theme}`}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

// Props Example
function MessageChild({ message }) {
  return <p>Message from parent: {message}</p>;
}

MessageChild.propTypes = {
  message: PropTypes.string.isRequired
};

function MessageParent() {
  return <MessageChild message="Props are working!" />;
}

// Form with useState
function FormState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Form with useRef
function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Final App Component
export default function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <div className="App">
      <Header title="Kishaunjith S🚀" />
      <Content />
      <Footer />
      <hr />

      <StyledButton />
      <hr />

      {showLifecycle && <LifecycleDemo />}
      <button onClick={() => setShowLifecycle(!showLifecycle)}>
        {showLifecycle ? 'Unmount LifecycleDemo' : 'Mount LifecycleDemo'}
      </button>
      <hr />

      <Counter />
      <hr />

      <JokeFetcher />
      <hr />

      <RefFocusForm />
      <hr />

      <ThemeContextDemo />
      <hr />

      <MessageParent />
      <hr />

      <FormState />
      <hr />

      <FormRef />
    </div>
  );
}
