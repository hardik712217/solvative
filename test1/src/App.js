import './App.css';
import react, { useState } from 'react';
import axios from 'axios';

import Searchresults from './Component';
function App() {

  // const [Search, setSearch] = useState('');
  const [data, setdata] = useState([]);


  var SearchPlaces = (e) => {
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

        console.log(response.data.Places);
        setdata(response.data.Places);

      }).catch(function (error) {
        console.error(error);
      });
    }
  }

  return (
    <div className="App">
      <br />
      <input onKeyDown={SearchPlaces} />
      <br />
      <br />

      {(data.length > 0) ?
        <center><Searchresults result={data} /></center>
        :
        ('enter Search Places')
      }
    </div>
  );
}

export default App;
