// https://www.frankfurter.app/docs/

let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');
let input = document.getElementById('input');
console.log(select);

fetch('https://api.frankfurter.app/currencies')
  .then((res) => res.json())
  .then((res) => displayDropDown(res));

function displayDropDown(res) {
  //   console.log(Object.entries(res)[0][0]);
  //AUD
  //converting array format to get it easily in dropdwon
  let curr = Object.entries(res);
  for (let i = 0; i < curr.length; i++) {
    let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}
btn.addEventListener('click', () => {
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let inputVal = input.value;
  if (curr1 === curr2) alert('Choose different currencies');
  else convert(curr1, curr2, inputVal);
});
function convert(curr1, curr2, inputVal) {
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      //   alert(`10 GBP = ${data.rates.USD} USD`);
      document.getElementById('result').value = Object.values(data.rates)[0];
    });
  //conversion -copied from the website
}
//try the functionality without convert button
//parallely the currency should convert when u are typing the currency
//weather api
