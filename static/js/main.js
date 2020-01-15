// add autocomplete for axios
const axios = require('axios').default;

// add base url for searching API
yardsAPI = '127.0.0.1:5000/APIApp/?';



function searchAPI() {
  axios
    .get()
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}