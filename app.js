import { CountUp } from './countUp.js';
// openNav();
document.querySelector('.mobile__nav').addEventListener('click',openNav);
document.querySelector('.closebtn').addEventListener('click',closeNav);
document.querySelector('.cover').addEventListener('click', closeNav);
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

let crossed = 0;
window.addEventListener('scroll', function(e) {
  var facts = document.getElementById('facts');
  var distanceToTop = facts.getBoundingClientRect().top;
  if (distanceToTop <= 300) {
    crossed = crossed + 1;
  }
  if (distanceToTop <= 300 && crossed === 1) {
    let demo1 = new CountUp('counter-1', 125);
    let demo2 = new CountUp('counter-2', 9102);
    let demo3 = new CountUp('counter-3', 6);
    let demo4 = new CountUp('counter-4', 78);
    demo1.start();
    demo2.start();
    demo3.start();
    demo4.start();

    // if (!demo.error) {
    //   demo.start();
    // } else {
    //   console.error(demo.error);
    // }
  }
});
const products_bottom = document.querySelector('.products__bottom');
const all = [
  {
    name: 'Tear drop shaped bowls',
    img: './img/tear-drop-1.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'square'
  },
  {
    name: 'Square shaped plates',
    img: './img/square-plates-1.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'square'
  },
  {
    name: 'Round shaped plates',
    img: './img/round-plate-2.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round'
  },
  {
    name: 'Square shaped bowls',
    img: './img/square-bowls-2.png',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'square'
  },
  {
    name: 'Round shaped plates',
    img: './img/round-plate-1.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round'
  },
  {
    name: 'Rectangle shaped plates',
    img: './img/single-plate-2.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'square'
  }
];
document.querySelector('.products__middle--all').classList.add('btn-active');
function showImages(arr) {
  products_bottom.textContent = '';

  let html = '';
  arr.forEach(element => {
    let newHtml = `<div class="view view-tenth">
            <img src="${element.img}" />
            <div class="mask">
              <h2>${element.name}</h2>
              <p>Available sizes: ${element.sizes}</p>
            </div>
          </div>`;

    html += newHtml;
  });
  products_bottom.insertAdjacentHTML('beforeend', html);
}

function removeActive() {
  document
    .querySelectorAll('.products__middle--btn button')
    .forEach(el => el.classList.remove('btn-active'));
}

showImages(all);

document
  .querySelector('.products__middle--btn')
  .addEventListener('click', e => {

    let selected = e.target.dataset.type;
    if (selected) {
      removeActive();
      e.target.classList.toggle('btn-active');

      const arr = [];
      all.forEach(el => {
        if (selected === 'plates') {
          if (el.type === 'plate') {
            arr.push(el);
          }
        }
        if (selected === 'bowls') {
          if (el.type === 'bowl') {
            arr.push(el);
          }
        }
        if (selected === 'square') {
          if (el.shape === 'square') {
            arr.push(el);
          }
        }
        if (selected === 'round') {
          if (el.shape === 'round') {
            arr.push(el);
          }
        }
      });
      if (selected === 'all') {
        showImages(all);
      } else {
        showImages(arr);
      }
    }
  });
