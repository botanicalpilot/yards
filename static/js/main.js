


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
        backgroundColor:['rgba(75, 192, 192, 0.2)','rgba(255, 99, 132, 0.2)']
       }]
     }
    })
    
  })
  .catch(error => {
    console.log(error);
  })









