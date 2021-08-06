import './App.css';
import react, { useState } from 'react';
import axios from 'axios';

import Searchresults from './Component';
function App() {

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);


  var SearchPlaces = (e) => {
    setloading(true)
    if (e.key === 'Enter') {
      console.log('enter ');

      var options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
        params: { query: e.target.value },
        headers: {
          'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {

        console.log(response.data);
        if (response.data.Places.length === 0) {
          setdata(['No result found']);
        } else {
          setdata(response.data.Places);
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
    setloading(false)

  }

  return (
    <div className="App">
      <br />
      <input onKeyDown={SearchPlaces} placeholder='Search Places' ></input>
      <br />
      <br />
      {loading ? (console.log('data is loading')) :
        (data.length > 0) ?
          <center><Searchresults result={data} /></center>
          :
          ('enter Search Places in search box shortcut:ctrl+/')
      }
    </div>
  );
}

export default App;
