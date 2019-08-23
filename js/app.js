import { CountUp } from './countup.js';

let crossed = 0;
window.addEventListener('scroll', function(e) {
  var someDiv = document.getElementById('facts');
  var distanceToTop = someDiv.getBoundingClientRect().top;
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
