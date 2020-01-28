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
        searchResults: [],
        
        
        // need to get data from for loop into addPlant
        // addPlant: {'scientificNameAuthor':null, 'nationalCommonName':null, 'family':null, 'nativeState':null, 'isInvasive':null}
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
    methods:{
        // need to get individual item upon clicking the button
        // function calls api with symbol

        // attempt with Axios
        
        getPlant : function(symbol) {
            let csrftoken = Cookies.get('csrftoken');
            let headers = {'X-CSRFTOKEN': csrftoken};
            axios.get('http://127.0.0.1:5000/APIApp/?symbol__iexact=' + symbol)
            .then(response => {
                plantInfo = response.data[0];
                const postData = new FormData()
                postData.append('scientificNameAuthor', plantInfo.scientificNameAuthor)
                postData.append('nationalCommonName', plantInfo.nationalCommonName)
                postData.append('family', plantInfo.family)
                postData.append('nativeState', plantInfo.nativeState)
                postData.append('isInvasive', plantInfo.isInvasive)

                console.log(postData);

                axios.post('http://127.0.0.1:8000/newUserPlant', postData,{headers: headers})
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
            .catch(error => {
                console.log(error);
            })
        }
    },


    
    computed:{
        filteredResults: function(){
            return this.searchResults.filter((searchResult) => {
                return searchResult.scientificNameAuthor.toLowerCase().match(this.searchInput)
            });
        }
    }
    
            
                
    
    
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