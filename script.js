const menuBtn = document.querySelector('.menu-btn-burger');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if(!menuOpen){
		menuBtn.classList.add('open');
		menuOpen = true;
	}

	else{
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

function myFunction() 
{
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

