


// make a chart from users plant list
let endpoint = '/data/'


axios.get(endpoint)
  .then(response => {
    let plantListData = response.data;
    console.log(response.data.userPlants.length);
    console.log(plantListData.userPlants[0]['isInvasive']);
  
    var i;
    let invasive = 0;
    let noninvasive = 0;
    for( i=0; i< plantListData.userPlants.length; i++) {
      if (plantListData.userPlants[i]['isInvasive'] == "TRUE") {
        invasive += 1
      } else {
        noninvasive += 1
      }
    }
    console.log(noninvasive)
    var ctx = document.getElementById('plantChart').getContext('2d');
    var invasiveChart = new Chart(ctx, {
    type:'pie',
    data: {
      labels: ['Native Plants', 'Invasive Plants'],
      datasets: [{
        label: 'native v. invasive',
        data: [noninvasive, invasive],
        backgroundColor:['RGB(2, 115, 104)','RGB(242, 81, 22)']
       }]
     }
    })
    
  })
  .catch(error => {
    console.log(error);
  })


// popup modal for customUserPlant submission
// Get the modal
let modal = document.getElementById("customUserPlantModal");

// Get the button that opens the modal
let customPlantBtn = document.getElementById("customPlantBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
customPlantBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 









