document.getElementById("header-container").style.backgroundColor = "green";

let section = document.querySelectorAll("section");


section[0].style.backgroundColor = "#DDA0DD";
section[1].style.backgroundColor = "#F0E68C";

for (let i = 0; i < section.length; i++) {
    section[0].getElementsByTagName("h3")[i].style.backgroundColor = "#FF69B4";    
}

for (let i = 0; i < section.length; i++) {
    section[1].getElementsByTagName("h3")[i].style.backgroundColor = "black";    
}

section[1].getElementsByTagName("h3")[1].style.color = "red";
