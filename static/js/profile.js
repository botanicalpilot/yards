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
    // methods:{
        // need to get individual item upon clicking the button
        // function calls api with symbol

        // attempt with Axios
        // getPlant : function(symbol) {
        //     axios.get('http://127.0.0.1:5000/APIApp/?symbol__iexact=' + symbol)
        //     .then(response => {
        //         plantInfo = response.data
        //         postData = {'scientificNameAuthor': plantInfo.scientificNameAuthor, 'nationalCommonName': plantInfo.nationalCommonName, 'family': plantInfo.family, 'nativeState': plantInfo.nativeState, 'isInvasive': plantInfo.isInvasive}

        //         // post data collected with axios
        //         axios.post('newUserPlant', postData)
        //             .then(response => {
        //                 console.log(response);
        //             })
        //             .catch(error => {
        //                 console.log(error);
        //             })
        //         })
        //     .catch(error => {
        //         console.log(error);
        //     })
        // }



        // old attempt:
        // getPlant : function(symbol) {
        //     this.$http.get("http://127.0.0.1:5000/APIApp/?symbol__iexact=${symbol}")
        //         .then(response => {
        //             this.plant = response.data;
        //             console.log(response);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // },

        // newPlant : function() {
        //     this.$http.post(url, this.addPlant)
        //         .then((response) => {
        //             this.getPlant();
        //         })
        //         .catch ((err) => {
        //             console.log(err);
        //         })
        // }
    // }
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