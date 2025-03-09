function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let count = 0;
const grassBtn = document.getElementById('grass-btn');

grassBtn.addEventListener('click', () => {
  count++;
  document.getElementById('count').textContent = count;
});