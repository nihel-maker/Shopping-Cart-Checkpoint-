let plusBtn = Array.from(document.getElementsByClassName('btn-plus'));
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener('click', function () {
    plusBtn[i].previousElementSibling.innerText++;
    //Update the total price
    totalPrice();
  });
}

//dimune quantity
let minusBtn = document.getElementsByClassName('btn-moins');
for (let button of minusBtn) {
  button.addEventListener('click', function () {
    if (button.nextElementSibling.innerText > 0) {
      button.nextElementSibling.innerText--;
    }
    //Update the total price
    totalPrice();
  });
}

//Calculate the total price
function totalPrice() {
  let price = document.getElementsByClassName('prx');
  let quantity = document.getElementsByClassName('quantity');
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerText * quantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}

//Delete a product
let deleteBtn = Array.from(document.querySelectorAll('.btn-delete'));
deleteBtn.forEach((el) =>
  el.addEventListener('click', function () {
    el.parentElement.parentElement.remove();
    totalPrice();
  })
);
// for (let i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener('click', function () {
//     deleteBtn[i].parentElement.parentElement.remove();
//     totalPrice();
//   });
// }

// //Like a product
let likeBtn = document.querySelectorAll('.btn-like');
let heart = document.querySelectorAll('.like');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
    if (heart[i].style.fill === 'black') {
      heart[i].style.fill = '#2da345';
    } else {
      heart[i].style.fill = 'black';
    }
  });
}