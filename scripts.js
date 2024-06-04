

function proxImagem( img ){
fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        console.log(imageObjectURL);
        const proxImgTag = document.createElement("img");
        proxImgTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImgTag);
    })
}
