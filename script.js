let myImgs = ["./img/honey.jpg", "./img/forest.jpg", "./img/river.jpg", "./img/bird.jpg", "./img/mountains.jpg",
    "./img/grasshopper.jpg", "./img/spider.jpg", "./img/rhino.jpg", "./img/owl.jpg", "./img/plant.jpg", "./img/field.jpg", "./img/fall.jpg"];
let myAlt = ["bottle with honey", "beautiful forest", "river flows over stones", "a bird an a lake", "a view of mountains",
    "grasshopper and leaf on a table", "a spider in the middle of the net", "a sitting rhino", "a view of an owl", "a picture of a new plant",
    "a view of field with paths", "a view of a tree in fall"];


function implementImages(){
    let contentRef = document.getElementById('img-container');
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += renderImages(index);  
    }
}

function renderImages(i){
   return  `<img class="img-main-page" src=${myImgs[i]} alt=${myAlt[i]}>`;
}