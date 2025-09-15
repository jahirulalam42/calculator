// const numbers = {
//     one : 1,
//     two : 2,
//     three : 3,
//     four : 4,
//     five: 5,
//     six : 6,
//     seven : 7,
//     eight : 8,
//     nine : 9,
//     zero : 0,
// }

const numbers = ['1','2','3','4','5','6','7','8','9', '0', 'del', '.', '+', '-', '*', '/'];

const numbersContainer = document.querySelector('.numbers');

const number = document.getElementsByClassName('num')

numbers.map( number => {
    numbersContainer.innerHTML += `<button type="button" value=${number} id=${number} class="num">${number}</button>`;
})
console.log(number);

for (let btn of number) {
    btn.addEventListener('click', (e) => {
        if(e.target.value === 'del'){
            document.getElementById('display').innerText = '';
            return;
        }
        document.getElementById('display').innerText += e.target.value;
        console.log(e.target.value);
    });
}