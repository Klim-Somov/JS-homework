import {
  timeBlock,
  timerInput
} from './main.js';

const sound = new Howl({
  src: [
    './sound.mp3',
  ]
});
export function substractTime() {
  if (timeBlock.innerHTML > 0) {
    timeBlock.innerHTML--;
    timerInput.value--;

  }
  if (timeBlock.innerHTML === '1') {
    
    setTimeout(() => {sound.play()
      
    }, 1000);
      
      
    }
  
  } 

 
 