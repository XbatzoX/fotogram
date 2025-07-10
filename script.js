let myImgs = ["./img/honey.jpg", "./img/forest.jpg", "./img/river.jpg", "./img/bird.jpg", "./img/mountains.jpg",
    "./img/grasshopper.jpg", "./img/spider.jpg", "./img/rhino.jpg", "./img/owl.jpg", "./img/plant.jpg", "./img/field.jpg", "./img/fall.jpg"];
let myAlt = ["bottle with honey", "beautiful forest", "river flows over stones", "a bird an a lake", "a view of mountains",
    "grasshopper and leaf on a table", "a spider in the middle of the net", "a sitting rhino", "a view of an owl", "a picture of a new plant",
    "a view of field with paths", "a view of a tree in fall"];
let cross;

// Display on/off of overlay
function overlayOn(event, imgNumber){
    let number = imgNumber;
    document.getElementById('overlay').style.display = "block";
    event.stopPropagation();

    titleOnOverlay(number);
}

function overlayOff(){
    if(cross){
        document.getElementById('overlay').style.display = "none";
        cross = false;
    }
}

function clickOnCross(){
    cross = true;
    overlayOff();
}

// Render Images on main of index.html
function implementImages(){
    let contentRef = document.getElementById('img-container');
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += renderImages(index);  
    }
}

function renderImages(i){
   return  `<img class="img-main-page" onclick="overlayOn(event, ${i})" src=${myImgs[i]} alt=${myAlt[i]}>`;
}

// Implement image title and close button on overlay
function titleOnOverlay(i){
    // Declaration of variables
    let text = myImgs[i];
    let contentTitleRef;
    // Preparing string for output
    text = text.split('img/');
    text = text[1].split('.');
    text = text[0];
    
    // render title on overlay
    contentTitleRef = document.getElementById('title');
    contentTitleRef.innerHTML = renderTitleOnOverlay(text);

    
}

function renderTitleOnOverlay(text){
    return `<span class="img-title">${text}</span>
            <span class="cross-close" onclick="clickOnCross()">x</span>`;
}

// Implement Image on overlay