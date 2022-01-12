/* Regras do JS

- CaseSensitive (nome / Nome)
- Não usa tipagem de dados
- Compilado pelo navegador

Declaração das variáveis 

var nome = 'Thamires' -> não recomendado por ser o modelo mais "antigo"
let nome = 'Thamires' -> usado para variaveis que podem ser modificadas ao longo do Script
const nome = 'Thamires' -> usado para variaveis que não irão sofrer alteração

Uso da Dom */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'  
} else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.lenght >= 100){
        txtAssunto.innerHTML = 'Número de caractéres inválido.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.innerHTML = 'Texto válido.'
        txtAssunto.style.display = 'none'
        nomeOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha os campos corretamente.')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
}