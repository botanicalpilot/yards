// alert("Hiii from js")


// add base url for searching API
let yardsAPI = "http://127.0.0.1:5000/APIApp/?";
let APISearchInput = document.getElementById("APISearch");
let searchParamInput = document.getElementById("APISearchOptions");

let scientificName = document.getElementById("scientificName");


// Function used on profile to search API
function searchAPI() {
  axios.get(yardsAPI + searchParamInput.value + APISearchInput.value)
    .then(function(response){
      searchData = response.data;
      scientificName.innerHTML = searchData[0].scientificNameAuthor;
      nationalCommonName.innerHTML = searchData[0].nationalCommonName;
      family.innerHTML = searchData[0].family;
    })
    .catch(function (error) {
      scientificName.innerHTML = "(An error has occurred.)"
    });
}

let searchButton = document.getElementById("plantSearchButton");
searchButton.addEventListener("click", searchAPI);

