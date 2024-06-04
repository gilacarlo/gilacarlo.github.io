let item = 0;
const max = 80;

function proxImagem( img ){
fetch(`img/${img}.png`)
    .then(resp => resp.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        console.log(imageObjectURL);
        const proxImgTag = document.createElement("img");
        proxImgTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImgTag);
    })
}

window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= altura){
        proxImagem(item++ %max)
    }
}

window.onload = function(){
    for(item = 0; item <5; item++){
        proxImagem(item);
    }
}