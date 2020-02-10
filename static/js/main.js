


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
    let nonnative = 0;
    
    for( i=0; i< plantListData.userPlants.length; i++) {
      if (plantListData.userPlants[i]['isInvasive'] == "TRUE") {
        invasive += plantListData.userPlants[i].numberOfPlant
      } else if (plantListData.userPlants[i]['isInvasive'] == "FALSE") {
        noninvasive += plantListData.userPlants[i].numberOfPlant
      } else {
        nonnative += plantListData.userPlants[i].numberOfPlant
      }
    }
    console.log(noninvasive)
    var ctx = document.getElementById('plantChart').getContext('2d');
    var invasiveChart = new Chart(ctx, {
    responsive: true,
    maintainAspectRatio: false,
    type:'pie',
    data: {
      labels: ['Native Plants', 'Invasive Plants', 'Nonnative'],
      datasets: [{
        label: 'native v. invasive',
        data: [noninvasive, invasive, nonnative],
        backgroundColor:['RGB(2, 115, 104)','RGB(242, 81, 22)', 'RGB(4, 138, 191)',]
       }]
     },
    })
    
  })
  .catch(error => {
    console.log(error);
  })



// accordion modal
let modal = document.querySelector(".modal");
let openButton = document.getElementById("customPlantBtn");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function WindowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", WindowOnClick);

// show and hide






// build an accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 





// freeze table headers
let header = document.getElementById("absoluteTableHeaders");
let freezeTableHeader = header.offsetTop;

function freezeFunction() {
  if (window.pageYOffset > freezeTableHeader) {
    header.classList.add(freezeTableHeader);
  } else {
    header.classList.remove(freezeTableHeader)
  }
}

window.onscroll = function() {freezeFunction()};








