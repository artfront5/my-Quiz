const button = document.querySelector('.open');
button.addEventListener('click', chekTest);

function chekTest() {
  let result = 0;

  let a1 = document.querySelector('.q1');

  if (a1.value === '4') {
    result++
  }

  let a2 = document.querySelector('.q2');
  if (a2.value === '6') {
    result++
  }

  let a3 = document.querySelector('.q3');
  if (a3.value === '8') {
    result++
  }

  a1.value = '';
  a2.value = '';
  a3.value = '';

  setTimeout(() => {
    alert(`Количество правильных ответов: ${result}`)
  }, 0);
};
