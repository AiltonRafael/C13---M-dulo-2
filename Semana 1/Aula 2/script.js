/* getElementById pega o id do elemento*/
const div = document.getElementById("text") 

// div.innerHTML = "<h1> Estou um novo texto </h1>"


/* getElementsByTagName vai pegar a tag específica */
const div__2 = document.getElementsByTagName('div')
// div__2[0].innerHTML = "Estou a primeira div"

/* getElementsByClassName pega o item pela classe */
const div__class = document.getElementsByClassName('container')
// console.log(div__class[0].innerHTML = 'Sou nova informação')

/* Query Selector é usado para pegar QUALQUER tipo de tag usando ID, CLASS, Tag, Atributo*/
const div_id = document.querySelector('#text')
const div__className = document.querySelector('.container')
const div__selectorAll = document.querySelectorAll('.container')
// const img = document.querySelector('img[src="font"]')
const span = document.querySelector('span')

const img = document.querySelector('img')
console.dir(img.attributes[0].nodeValue)

span.addEventListener("click", () => {
    console.log('EU FUI CLICADO')
})

const imgList = ["./assets/matrix.JPG", "./assets/matrix_2.JPG"]


function handleChangeImg(){
    if(img.attributes.src.nodeValue == imgList[0]){
        img.setAttribute("src", `${imgList[1]}`)
        span.innerHTML = "IMAGEM 1"
    } else {
        img.setAttribute("src", `${imgList[0]}`)
        span.innerHTML = "IMAGEM 2"
    }
}

setInterval(handleChangeImg, 2000)



