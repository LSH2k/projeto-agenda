const form = document.querySelector('form')
const telNome = []
const telNum = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputNum = document.getElementById('numero')

    telNome.push(inputNome.value)
    telNum.push(inputNum.value)

    let = linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNum.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNome.value = ''
    inputNum.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}