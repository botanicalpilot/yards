# Yards Biodiversity

## Project Summery
* Yards Biodiversity allows users to sign up and add plants that are in their immediate vicinity.
* When users sign up they can select the state in which they reside. An [API](https://github.com/botanicalpilot/yardsAPI) I built retrieves data that consists of each states native, nonnative, and invasive plants. This data was collected from the USDA and aggregated by me. 
* Users may select plants from the API and add them to a list associated with the user. Users may add custom plant entries to this list. This helpful for exotic species that may not be in the database.
* Native, nonnative, and invasive data is displayed as a circle graph on the users profile page. 

## [Demo](http://botanicalpilot.pythonanywhere.com/)
* I am poor and can't afford to host my complete API. As such only data for Oregon is currently deployed. 
* You can help me be less poor by [hiring me](http://stephenouldhouse.com). 

## Navigation and Use
* From the home page you may sign up or login. 
* Enter your profile. 
* Scroll to the bottom on the page. Once the database loads you may dynamically search for plants by scientific name. 
* Select plants you own by clicking the "Add Plant" button on the right hand side of the search table. 
* Add as many plants as you like. Refresh the page when finished. 
* Custom plants may also be added by selecting the "+" button to the right of the plant search bar and filling out the form on the modal. 
* User plant details may be revealed by clicking on the accordion items. 
* In the accordion the user may also change the number of individual plants they own or deleting the plant species from their list. 
* Data from the user plant list is displayed to the right of the accordion. 