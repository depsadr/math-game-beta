const para = document.querySelector('.name');

para.addEventListener('click', updateName);

function updateName() {

  let name = prompt('Enter a new name');
  para.textContent = name;
}