document.addEventListener("DOMContentLoaded", function(event) {

  toggleMobileMenu();
  searchMove();

  window.addEventListener('resize', function(){
      searchMove();
  });
});

//----------------------Search move to another place
function searchMove() {
  const search = document.querySelector('.search');
  const leftColumn = document.querySelector('.two-columns__left');
  const rightColumn = document.querySelector('.two-columns__right');
  const isSearchInLeft = leftColumn.querySelector(search.className);
  const isSearchInRight = rightColumn.querySelector(search.className);


  if (window.innerWidth < 992) {
    !isSearchInLeft ? leftColumn.prepend(search) : leftColumn.removeChild(search);
  }

  if (window.innerWidth > 991) {
    !isSearchInRight ? rightColumn.prepend(search) : rightColumn.removeChild(search);
  }

}

//-----------------------Toggle Mobile Menu
function toggleMobileMenu() {
  const menu = document.querySelector(".menu-toggle__btn");

  menu.addEventListener("click", e => {
    e.preventDefault();
    menu.classList.toggle("opened");
  }, false);
}

