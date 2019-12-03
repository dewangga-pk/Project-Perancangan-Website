function displayNav() {
  document.getElementById("SideNav").style.height="150px";
}
function closeNav() {
  document.getElementById("SideNav").style.height = "0";
};

function navClick() {
  var x = document.getElementById("SideNav");
  if (x.className == "Sidenavbar") {
    x.className += " open";
    displayNav();
  } else {
    x.className = "Sidenavbar";
    closeNav();
  }
}

let a1 = document.querySelectorAll(
  ".jumbotron,.container,.testimoni,footer"
);
for (let i =0 ,len = a1.length;i<len;i++){
  a1[i].addEventListener('click',function(){
    closeNav();
  });
  a1[i].addEventListener('scroll',function(){
    closeNav();
  });
};

var modal = document.getElementById("myModal");                
var btn = document.getElementById("myBtn");        
var span = document.getElementsByClassName("close")[0];                 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Jquery
