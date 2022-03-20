# Beer Punk
# Introduction #

Beer Punk displays a set of 5 local breweries per page based on State and City.
I am using the Open Brewery DB API available here: *https://www.openbrewerydb.org/*

# Functions #
* The user enters a State, City and Page number and also indicates if there is a need to export to a JSON file
* If the user clicks the 'Export JSON' button, the checkbox changes status. Then after the list is displayed in the browser, a 'data.json' file is written in the 'downloads' folder
* If the user clicks the 'Don't Export JSON' button, the checkbox changes status. Then after the list is displayed in the browser, no file is written
* If the user enters invalid data, the fields will turn orange to indicate an issue. The user will not be able to submit the form if there is invalid data
* If everything goes right, a list of 5 breweries will be display with Brewery Name, City, Street Address and hyperlink.
* In order to move on to the next set of breweries, the user needs to change the page number
* If the user changes a field prior to submitting, the list will be cleared to make room for the new list.


## Testing *beer-punk.spec.js* ##

* Added unit testing for urlBuilder


# Requirements #

* Uses a Class for the batch of Breweries
* Uses testable code with Jasmine
* Uses a fetch request to a 3rd party API
* Contains form fields, validates those fields

# Further Enhancements #

* Instead of having a field for page number, have buttons for next, previous page (implement better pagination)
* Have the text style of the Breweries change depending on the Brewery type, i.e., micro, nano, regional, brewpub, large, planning, bar, contract, proprietor, closed
* Have an option to select individual elements coming from the response object to add them to a list and store them in a database
* Implement the Google Maps API or other to locate the Breweries



