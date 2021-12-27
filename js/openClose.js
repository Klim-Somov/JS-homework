export function openClose() {
  let item1 = document.querySelector('.timer');
  let item2 = document.querySelector('.form');

  let menuBtn = document.querySelector('.side-menu-btn');
  menuBtn.addEventListener("click", () => {
    item1.classList.toggle('closed-open');
    item2.classList.toggle('closed-open');
    
  });
}
