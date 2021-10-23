/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
let apiKey = '&appid=3f06858ca402ae7da4def22506f36531';

document.getElementById('generate').addEventListener('click', performAction)

function performAction(e){

  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  getData(baseURL, zip, apiKey)
  .then(function(data) {
    console.log(data);
    postData('/add', {date:d, temp:data.list[0].main.temp, content:feelings})
    updateUI();
  })
};

const getData = async (baseURL, zip, key)=> {
  const response = await fetch(baseURL + zip + key) 
  try {
    const newData = await response.json();
    return newData;
  } catch (error){
    console.log("error", error);
  }
}

const postData = async (url = "", data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
    }
}

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const newData = await request.json();
    document.getElementById('date').innerHTML = `Todays Date: ${newData.date}`;
    document.getElementById('temp').innerHTML = `Todays temperature: ${newData.temp}`;
    document.getElementById('content').innerHTML = `How you feel: ${newData.content}`;
  } catch (error) {
    console.log("error", error);
  }
}