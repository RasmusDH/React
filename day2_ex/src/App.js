import './App.css';
import { useState, useEffect } from 'react';
import ListDemo from './ListDemo';

function App() {
  return (
    <div className="App">
      <CountComponent initialCount={5}/>
    </div>
  );
}

function CountComponent(props) {
    const {initialCount} = props;
    // Create localStorage count :
    const localStorageCount = Number(window.localStorage.getItem('count') || 0);
    const [count, setCount] = useState(localStorageCount);
    const [chuckJoke, setChuckJoke] = useState('')
    const [joke, setJoke] = useState('')

    const url2 = 'https://icanhazdadjoke.com'
    const url = 'https://api.chucknorris.io/jokes/random'

    function incrementCount(){
      setCount(count +initialCount);
    }

    function decrementCount(){
      setCount(count -initialCount);
    }

    useEffect(
      () => {
        window.localStorage.setItem("count", count);
      }, [count]
    )

    useEffect(() => {
      const interval = setInterval(() => {
          getJoke()
      }, 10000)
      return () => {
          clearInterval(interval)
          alert('Hov, du er på  vej væk')
      }
  }, [])

    return (
      <div>
        <p>Increment count:</p>
        <button onClick={incrementCount}>Increment</button>
        <p>Decrement count:</p>
        <button onClick={decrementCount}>Decrement</button>
        <p>Count is now: {count}</p>
        <button onClick={getChuckJoke}>Get ChuckNorris</button>
        <p>{chuckJoke}</p>
        <p>New joke every 10 sec:</p>
        <p>{joke}</p>
        <p>ListDemo:</p>
        <ListDemo/>
      </div>
    )

    function getJoke() {
      fetch(url2, { headers: { 'Accept': 'application/json' } })
          .then(res => res.json())
          .then(data => {
              setJoke(data.joke)
          })
  }

    function getChuckJoke() {
      fetch(url)
          .then(res => res.json()) //in flow1, just do it
          .then(data => {
            setChuckJoke(data.value)
          })
    }

}


export default App;