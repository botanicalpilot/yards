// add base url for searching API
// Same thing but in a purely functional syntax
// user as helper function for the query parameters

const buildQueryParamsPure = (params) => (
    Object
      .keys(params)
      .reduce((q, k) => q + `${k}=${params[k]}&`, '?')
      .slice(0, -1)
  );

// make vue
const appSearch = new Vue({
    el: '#searchAPI',
    data: {
        searchInput: "",
        searchResults: null,
    },
    mounted: function() {
            axios.get('http://127.0.0.1:5000/APIApp/')
            .then(response => {
            this.searchResults = response.data;
            console.log(response);
            
            })
            .catch(error => {
                console.log(error);
            })
    },
    
            
                
    
    
});





  // computed: {
    //     filteredSearchResults: function () {
    //         var plantObjects = this.searchResults;
    //         var scientificNameAuthorSearch = this.scientificNameAuthorSearch;

    //         if(!scientificNameAuthorSearch) {
    //                 return plantObjects;
    //         }

    //         searchString = scientificNameAuthorSearch.trim().toLowerCase();

    //         plantObjects = plantObjects.filter(function(item){
    //             if(item.scientificNameAuthor.toLowerCase().indexOf(scientificNameAuthorSearch) !== -1){
    //                 return item;
    //             }
    //         })
    //         return plantObjects;
    //     }
    //     }