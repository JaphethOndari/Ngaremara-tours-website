const mForm = document.getElementsByTagName("form")[0]; 
const Pop = document.getElementsByTagName("section")[0]; 
mForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    Pop.style.display = "flex"; 
    Pop.style.alignItems = "center"; 
    Pop.style.justifyContent = "center"; 
    mForm.style.display = "none"; 

});
