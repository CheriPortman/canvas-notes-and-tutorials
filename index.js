import canvas1 from './examples/canvas1.js';
import canvas2 from './examples/canvas2.js';
import canvas3 from './examples/canvas3.js';
import canvas4 from './examples/canvas4.js';
import canvas5 from './examples/canvas5.js';

canvas1();
canvas2();
canvas3();
canvas4();
canvas5();


const canvas02 = document.getElementById('sixth');
const ctx2 = canvas02.getContext('2d');

ctx2.font = '30px Comic Sans MS';
ctx2.fillStyle = 'purple';
ctx2.textAlign = 'center';
ctx2.fillText('rectangle 6', canvas02.width / 2, canvas02.height / 2);
