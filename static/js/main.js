// alert("Hiii from js")


// add base url for searching API
let yardsAPI = "http://127.0.0.1:5000/APIApp/?format=json&";
let APISearchInput = document.getElementById("APISearch");
let searchParamInput = document.getElementById("APISearchOptions");

let scientificName = document.getElementById("scientificName");


// Function used on profile to search API
function searchAPI() {
  axios.get(yardsAPI + searchParamInput.value + APISearchInput.value)
    .then(function(response){
      searchData = response.data;
      console.log(searchData)
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

// // get multiple items from rest
// function returnAPIItems() {
//   // length is the number of times for loop will repeat
//   let length = 10
//   let wrapper = document.getElementById("APIWrapper")

//   for (i=0; i<length; i++) {
//     // add data to created item
//     axios.get(yardsAPI + searchParamInput.value + APISearchInput.value)
//     .then(function(response){

//       scientificNameSpan = document.createElement('span')
//       nationalCommonNameSpan = document.createElement('span')
//       familySpan = document.createElement('span')  

//       searchData = response.data;
//       scientificNameSpan.innerHTML = searchData[i].scientificNameAuthor;
//       nationalCommonNameSpan.innerHTML = searchData[i].nationalCommonName;
//       familySpan.innerHTML = searchData[i].family;
      
//       wrapper.appendChild(scientificNameSpan);
//     })
//     .catch(function (error) {
//       scientificName.innerHTML = "(An error has occurred.)"
//     });
//   }
// }

