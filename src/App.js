import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {
  const [state, setState] = useState ({
    srch: "",
    results: [],
    selected: {}
  });
  const queryUrl = "https://www.omdbapi.com/?apikey=d69e1782";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(queryUrl + "&s=" + state.srch).then(({ data }) => {
        console.log(data);
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
        
      });
    }
  }

  const handleInput = (e) => {
    let srch = e.target.value;
    setState(prevState => {
      return { ...prevState, srch: srch }
    });
  }

  const openModal = id => {
    axios(queryUrl + "&i=" + id)
    .then(({ data }) => {
      let result = data;
      // console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closeModal = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App">
      <header>
        <h1> <small>CINEMA</small><b>BINGE</b></h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results}  openModal={openModal} />

        {(typeof state.selected.Title != "undefined") ? <Modal selected={state.selected} closeModal={closeModal} /> : false}
        <Footer />
      </main>
    </div>
  );
}

export default App;
