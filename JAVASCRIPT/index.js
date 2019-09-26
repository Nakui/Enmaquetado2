  var mySidebar = document.getElementById("mySidebar");
  var abrirSidebar = document.getElementById("abrir-Sidebar");

  //console.log(mySidebar)
  //console.log(side)

  abrirSidebar.onclick  = function() {
    //console.log('is working')
    mySidebar.classList.add("active");
  }

  //Cierra el sidebar
  window.onclick = function(event) {
    if (event.target == mySidebar) {      
      mySidebar.classList.remove("active");
    }
  }