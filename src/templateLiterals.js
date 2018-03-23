
let name ="Deepak";

function greeting(word){
    return word.toUpperCase();
}

let template = 
` <h2>Hai! ${greeting('Good Morning')} ${name} You are using template</h2>
  <p> This is just a sample showing the template example</p>
`

document.getElementById('template').innerHTML = template;