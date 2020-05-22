const URL = `http://ws.audioscrobbler.com/2.0/`
const axios = require('axios')
const input = document.querySelector(".enviar")
const tamanho = document.querySelector(".tamanho")
let usuariom = document.querySelector(".user")

async function obterChart(usuario,dias,limite){
const url = `${URL}?method=user.gettopalbums&user=${usuario}&period=${dias}&limit=${limite}&api_key=99954ad9838941742d72d91c0037214f&format=json`
const response = await axios.get(url)
return response.data}

async function main(){

let dias = input.value
let limite = String(eval(tamanho.value.replace("x","*")) + 1)
const result = await obterChart(usuariom.value,dias,limite)

for(let cont =0; cont < result.topalbums.album.length -1; cont++){
    console.log(result.topalbums.album[cont].artist.name)
    console.log(result.topalbums.album[cont].name)
    let tamanico = 2
    if(tamanho.value == "10x10"){
        tamanico = 1
    }

    let macaco = Object.values(result.topalbums.album[cont].image[tamanico])[1]
    var src = document.getElementById('x')

    if(tamanho.value == "3x3"){
        if(cont == 3 || cont == 6){
            let br = document.createElement('br')
            src.appendChild(br)
            }
        var img = document.createElement("img");
        img.src = `${macaco}`;
        src.appendChild(img);
        }
        if(tamanho.value == "4x4"){
            if(cont == 4 || cont == 8 || cont == 12){
                let br = document.createElement('br')
                src.appendChild(br)
            }
            var img = document.createElement("img");
            img.src = `${macaco}`;
            src.appendChild(img);
        }
        if(tamanho.value == "5x5"){
            if(cont == 5 || cont == 10 || cont == 15 || cont == 20){
                let br = document.createElement('br')
                src.appendChild(br)
            }
            var img = document.createElement("img");
            img.src = `${macaco}`;
            src.appendChild(img);
        }
        if(tamanho.value == "10x10"){
            if(cont == 10 || cont == 21 || cont == 30 || cont == 40 || cont == 51 || cont == 60 || cont == 70 || cont == 80 || cont == 90 || cont == 100){
                let br = document.createElement('br')
                src.appendChild(br)
            }   
            var img = document.createElement("img");
            img.src = `${macaco}`;
            src.appendChild(img);
        }
    }
}

const botao = document.querySelector('.botao')
document.addEventListener('click',e =>{
    const el = e.target
    if(el == botao){
        formulario.parentNode.removeChild(formulario);
        deletar_apos_procura.parentNode.removeChild(deletar_apos_procura);

        document.body.style.backgroundImage = "url('images/fa3.jpg')"
        main()
        }
    })





