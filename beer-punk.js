const formEl = document.getElementById('brewery-form');
const stateEl = document.getElementById('state');
const pageEl = document.getElementById('page');
const cityEl = document.getElementById('city');
const selector = document.getElementById("contact-kind")
let divElCheck = document.getElementById('checkbox-container');

const notice = document.getElementById('upgrade-notice')
setTimeout(()=>{

  notice.style.display='none'

}, 10000)

let secondsRemaining =5
let countdownInterval = setInterval(function () {
  if (secondsRemaining > 0) {
    secondsRemaining--
    console.log(secondsRemaining)
  } else {
    clearInterval(countdownInterval)
  }
},1000)

let x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
x.id="myCheck"
x.className="checkbox-element"


let button1 = document.createElement("button")
let button2 = document.createElement("button")

button1.id="button-1"
button2.id="button-2"

button1.innerText="Export JSON"
button1.className="btn btn-primary mr-4"
button2.innerText="Don't Export JSON"
button2.className="btn btn-primary mr-4"


//due to some weird jasmine stuff, I need to check if the input checkbox exist prior to appending it

if(x){
  if (divElCheck){
    divElCheck.append(x)
  }

}

if (button1){
  if(divElCheck){
    divElCheck.append(button1)
  }

}

if (button2){
  if(divElCheck){
    divElCheck.append(button2)
  }

}


button1.addEventListener('click', ()=>{
  document.getElementById("myCheck").checked = true
})

button2.addEventListener('click', ()=>{
  document.getElementById("myCheck").checked = false
})

"use strict";

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData, null, 2);
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}


class BreweryBatch{

  constructor(){
    this.breweryList=[]
  }

  exportToTxt(){
    console.log(JSON.stringify(this.breweryList, null, 2))
    let myJsonString = JSON.stringify(this.breweryList)
    exportToJsonFile(this.breweryList)

  }

  clearList(){

    this.breweryList=[]


  }

}

const deleteElements = function (){

  let parentDiv = document.getElementById('brewery-container');
  while (parentDiv.firstChild){
    parentDiv.firstChild.remove()
  }

}


const urlBuilder = function(state, city, page){

  //return "https://api.openbrewerydb.org/breweries?page=15&by_state=washington&sort=type,name:asc"
  return `https://api.openbrewerydb.org/breweries?page=${page}&per_page=5&by_state=${state}&by_city=${city}&sort=type,name:asc`

}

const fetchAPI = function(e){
  if(e){
    e.preventDefault();
  }

  let divEl = document.getElementById('brewery-container');

  const state = stateEl.value
  const page = pageEl.value
  const city = cityEl.value
  let url = urlBuilder(state, city, page)

  if(formEl){
    deleteElements()
  }

  fetch(url)
      .then(function(data) {
        //debugger
        //console.log(data.json())
        return data.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);

        let myList = new BreweryBatch()

        for (let counter=0; counter<5; counter++){

          let brewery = responseJson[counter].name
          let street = responseJson[counter].street
          let city = responseJson[counter].city
          let breweryLink = responseJson[counter].website_url
          const h1Elem = document.createElement('h1')
          const h2Elem = document.createElement('h2')
          const pElem = document.createElement('p')
          const aElem = document.createElement('a')

          const brew = {
            breweryName:brewery,
            breweryStreet:street,
            breweryCity:city,
            breweryLink,
          }

          myList.breweryList.push(brew)

          //could have used map

          h1Elem.innerText=brewery
          h1Elem.id="beer-name"
          h2Elem.innerText=city
          h2Elem.id="beer-city"
          pElem.innerText=street
          pElem.id="beer-street"
          aElem.href=breweryLink
          aElem.id="brewery-link"
          aElem.innerText="Website"

          divEl.append(h1Elem)
          divEl.append(h2Elem)
          divEl.append(pElem)
          divEl.append(aElem)

        }

        let generateJson = document.getElementById('myCheck');

        //console.log(generateJson.checked)

        if(generateJson.checked){
          myList.exportToTxt()
        }

        if(formEl){
          formEl.addEventListener('change', deleteElements, false)
        }

        myList.clearList()

      });

  return url
}

if(formEl){
  formEl.addEventListener('submit', fetchAPI, false)

}


