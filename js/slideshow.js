const imageNames = [
    "D:/JS_NodeJS/Assignment/images/hinh1.jpg",
    "D:/JS_NodeJS/Assignment/images/hinh2.jpg",
    "D:/JS_NodeJS/Assignment/images/hinh3.jpg"
]

let images = []
let position = -1

function loadImages() {
    for (const name of imageNames) {
        const img = new Image()
        img.src = name
        images.push(img)
    }
}

function next() {
    if(position == images.length-1){
        position = 0
    }else{
        position++
    }

    document.getElementById('image').src = images[position].src;
    document.getElementById('caption').innerText = 'Ảnh ' + (position+1)+"/"+ images.length
}

function previous() {
    if(position <= 0){
        position = images.length - 1;
    }else{
        position--;
    }

    document.getElementById('image').src = images[position].src;
    document.getElementById('caption').innerText = 'Ảnh ' + (position+1)+"/"+ images.length
}