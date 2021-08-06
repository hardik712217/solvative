Table of Contents
Readme first!
Search Places
Styles
Search Box
Keyboard Shortcut
Table
Functionality
Search box
Table
Readme first!
Try to use less number of 3rd party packages/libraries

Keep your code clean, maintainable and readable, usage of formatters and linters might come handy here

Follow best practices for particular framework/library

Your project should have a README.md file, which should contain at-least a getting started guide, you can use below for example:

# Getting Started

  ```bash
  # after cloning the repo
  
  cd backend
  npm i
  npm start
  
  # new terminal
  
  cd frontend
  npm i
  npm start
  ```
  
It is ok if you can't complete all the tasks/features, but each individual task should be in considerably complete state

You will need to push all of your code to a public GitHub repo and share the link of the same

You will get 1-1.5 hours to do the exercise

Search Places
Search Places allows users to search through places.

We are only looking for decent UI, which can just work.
Please do not use any css framework like bootstrap, tailwind, etc.
All views should be fully responsive upto 300px width.
You can use either React, Vue, Angular or vanilla HTML/CSS/JavaScript.
Inline styles not allowed.
Styles
Font-size: 16px
Font-color: rgb(33, 37, 41)
Font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
Search Box
Search box should look like below for various states, click on image to see it properly:

State	UI	Styling
Default		Width: 241px, Height: 38px, Font-size: 16px, Background-color: rgb(255, 255, 255), Border-color: rgb(206, 212, 218), Padding-top/bottom: 6px, Padding-left: 12px, Padding-right: as-needed, Border-radius: 4px
Filled		.
Active/Focus		border-color: #7952b3; box-shadow: 0 0 0 3px rgb(121 82 179 / 25%);
Disabled		Background-color: rgb(233, 236, 239)
Keyboard Shortcut
Font-size: 12px
Border-color: rgb(222, 226, 230)
Border-radius: 2px
Height: 24px
Padding left/right: 4px
Table


Padding for td/th: 8px
Border color: rgb(222, 226, 230)
Header font-weight: 700
Functionality
You have create layout, where
Search box is on top-left side of page
Table is at bottom of search box
Search box
Once user types and presses enter, start showing results in the table
Keyboard shortcut CTRL/CMD + / should work, it will make search box focused
Table
In table there will be 3 columns:
# - static counter starting from 1
Place Name
Country - Show country with flag
For flag, use CountryID from response and get flag from https://www.countryflags.io/ (https://www.countryflags.io/:country_code/:style/:size.png).
For example, for CountryID="IN-sky", you will get flag from https://www.countryflags.io/in/flat/64.png
For no result, simply say "No result found" in table
For null/undefined/blank search, display "Start searching" in table
When results are getting fetched, show a spinner on top of table.
API
Please use environment variables to store/read API url and secrets.

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Delhi'},
  headers: {
    'x-rapidapi-key': 'ASK_FOR_KEY',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
Example Response
{
  "Places" : [ {
    "PlaceId" : "DEL-sky",
    "PlaceName" : "New Delhi",
    "CountryId" : "IN-sky",
    "RegionId" : "",
    "CityId" : "IDEL-sky",
    "CountryName" : "India"
  }, {
    "PlaceId" : "HXD-sky",
    "PlaceName" : "Delingha",
    "CountryId" : "CN-sky",
    "RegionId" : "",
    "CityId" : "HXDA-sky",
    "CountryName" : "China"
  }, {
    "PlaceId" : "YWJ-sky",
    "PlaceName" : "Deline",
    "CountryId" : "CA-sky",
    "RegionId" : "",
    "CityId" : "YWJA-sky",
    "CountryName" : "Canada"
  } ]
}