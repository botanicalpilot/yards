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
            let state = document.getElementById('plantStateSearch').innerHTML;
            axios.get('http://127.0.0.1:5000/APIApp/?nativeState__iexact=' + state)
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
            let state = document.getElementById('plantStateSearch').innerHTML;
            axios.get('http://127.0.0.1:5000/APIApp/?symbol__iexact=' + symbol)
            .then(response => {
                plantInfo = response.data[0];
                const postData = new FormData()
                postData.append('scientificNameAuthor', plantInfo.scientificNameAuthor)
                postData.append('nationalCommonName', plantInfo.nationalCommonName)
                postData.append('family', plantInfo.family)
                postData.append('nativeState', state)
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

