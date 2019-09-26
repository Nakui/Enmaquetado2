/*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Lato", sans-serif;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}


#mySidebar {
	width: 250px;
}

#mySidebar.close {
	transform: translateX(-250px);
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}


@media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  }
  </style>
  </head>
  <body>
  
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">×</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  
  <div id="main">
    <button class="openbtn" onclick="toggleNav()">☰ Toggle Sidebar</button>  
    <h2>Collapsed Sidebar</h2>
    <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
  </div>
  
  <script>
  function toggleNav() {
    document.getElementById("mySidebar").classList.toggle("close");
  }
  
  </script>
     
  </body>
  </html>   
*/

var sidebar = document.getElementById("mySidebar");

var side = document.getElementById("side");

side.onclick = function() {
  sidebar.style.display = "inline-block";
}