const images=["img1.jpg","img2.jpg","img3.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage=`url("img/${chosenImage}")`;
