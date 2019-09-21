import { CountUp } from './countUp.js';
// openNav();
document.querySelector('.mobile__nav').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelector('.cover').addEventListener('click', closeNav);
/* Open */
function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

/* Close */
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
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
    name: 'Round shaped bowl',
    img: './compressed/round/bowl_round_1-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'round',
    another_img: './compressed/round/round-1.jpg'
  },
  {
    name: 'Round shaped bowl',
    img: './compressed/round/bowl_round_2-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'round',
    another_img: './compressed/round/round-2.jpg'
  },
  {
    name: 'Round shaped bowl',
    img: './compressed/round/bowl_round_3-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'round',
    another_img: './compressed/round/round-3.jpeg'
  },
  {
    name: 'Round shaped Plate',
    img: './compressed/round/round_plate_1-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round',
    another_img: './compressed/round/round-4.png'
  },
  {
    name: 'Round shaped Plate',
    img: './compressed/round/round_plate_2-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round',
    another_img: './compressed/round/round-5.jpg'
  },
  {
    name: 'Round shaped Plate',
    img: './compressed/round/round_plate_3-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round',
    another_img: './compressed/round/round-6.jpg'
  },
  {
    name: 'Round shaped Plate',
    img: './compressed/round/round_plate_4-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'round',
    another_img: './compressed/round/round-7.jpg'
  },
  {
    name: 'Square shaped bowl',
    img: './compressed/square/square_bowl_1-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'square',
    another_img: './compressed/square/square-1.jpg'
  },
  {
    name: 'Square shaped plate',
    img: './compressed/square/square_plate_1-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'square',
    another_img: './compressed/square/square-2.jpg'
  },
  {
    name: 'Square shaped plate',
    img: './compressed/square/square_plate_2-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'square',
    another_img: './compressed/square/square-3.jpg'
  },
  {
    name: 'Square shaped plate',
    img: './compressed/square/square_plate_4-min.jpg',
    sizes: '2, 3, 4, 5',
    type: 'plate',
    shape: 'square',
    another_img: './compressed/square/square-4.jpg'
  },
  {
    name: 'Rectangle shaped bowl',
    img: './compressed/rectangle/rectangle_plate.jpg',
    sizes: '2, 3, 4, 5',
    type: 'bowl',
    shape: 'rectangle',
    another_img: './compressed/rectangle/rectangle-1.jpg'
  }
];
const allTypes = [
  {
    name: 'Round',
    img: './compressed/round/round_plates_all-min.jpg',
    sizes: '2, 3, 4, 5',
    shape: 'round'
  },
  {
    name: 'Square',
    img: './compressed/square/square_plates_all_1-min.jpg',
    sizes: '2, 3, 4, 5',
    shape: 'square'
  },
  {
    name: 'Rectangle',
    img: './compressed/rectangle/rectangle_plate.jpg',
    sizes: '2, 3, 4, 5',
    shape: 'rectangle'
  }
];
document.querySelector('.products__middle--all').classList.add('btn-active');
function showImages(arr) {
  products_bottom.textContent = '';

  let html = '';
  arr.forEach(element => {
    let newHtml;
    if (element.hasOwnProperty('type')) {
      newHtml = `<div class="view view-tenth">
            <img class="hovering_image" src="${element.img}" />
            <div class="mask mask-1">
              <img src="${element.another_img}">
            </div>
          </div>`;
    } else {
      newHtml = `<div class="view view-tenth">
            <img class="hovering_image" src="${element.img}" />
            <div class="mask">
              <h2>${element.name}</h2>
              <p>Available sizes: ${element.sizes}</p>
            </div>
          </div>`;
    }
    html += newHtml;
  });
  products_bottom.insertAdjacentHTML('beforeend', html);
}

function removeActive() {
  document
    .querySelectorAll('.products__middle--btn button')
    .forEach(el => el.classList.remove('btn-active'));
}

showImages(allTypes);

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
        if (selected === 'rectangle') {
          if (el.shape === 'rectangle') {
            arr.push(el);
          }
        }
      });
      if (selected === 'all') {
        showImages(allTypes);
      } else {
        showImages(arr);
      }
    }
  });
