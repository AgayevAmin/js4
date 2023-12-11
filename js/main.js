const refreshBtn = document.getElementById("refresh")
const toggleBtn = document.getElementById("toggle")
const theme = localStorage.getItem("theme")

theme === "dark" && document.body.classList.add("dark");

toggleBtn.addEventListener("click", toggleMode);
refreshBtn.addEventListener("click", reload)

// function toggleMode() { 
//     document.body.classList.toggle("dark");
//     if (theme === "dark") {
//       localStorage.setItem("theme", "light");
//     } 

//     else {
//       localStorage.setItem("theme", "dark");
//     }
// }
 
// function reload() { 
//     window.location.reload()
// }




function toggleMode() { 
  if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      theme = "light";
  } else {
      document.body.classList.add("dark");
      theme = "dark";
  }

  localStorage.setItem("theme", theme);
}

 
function reload() {
   
    window.location.reload();
}
