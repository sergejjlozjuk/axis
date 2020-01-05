

let root = document.getElementById('root');

 let input = document.createElement('input',);
 input.className = 'valueOfCity';
root.appendChild(input);
let btn = document.createElement('button');
btn.type = 'button'
btn.className = 'weather';
btn.innerHTML = 'go';
root.appendChild(btn);
let result = document.createElement('div');
result.className = 'wetherResult';
root.appendChild(result);
let town = null;
let temp = null;
btn.onclick = (() => {
      let obj = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c534f92bcc805e92aa8d29cdb2e69ec1`)
      .then(
        (date) => date.json()
        .then ((a) => {town = a.name;
            temp = a.main.temp;
            console.log(a);
            result.innerHTML = `town: ${town}, temp: ${temp}`;
        })
      )
}
      )




      const url = 'https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=c534f92bcc805e92aa8d29cdb2e69ec1';
      axios.get (url)
      .then(response => console.log(response))