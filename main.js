const frm1 = document.querySelector(".formentrada")
const inp1 = document.querySelector(".inputentrada")
const lst1 = document.querySelector(".ulentrada")
let soma = 0

frm1.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp1.value
    if (valor.trim() == "") return
    inp1.value = ""
    soma += parseFloat(valor)
    lst1.innerHTML += `
    <li>
     <button>Remover Entrada</button>
     <span>${valor}</span>
    </li>
    `

})

lst1.addEventListener('click', (ev) => {
    if (ev.target.closest('button')) {
        soma -= parseFloat(ev.target.closest('li').querySelector('span').innerText)
        ev.target.closest('li').remove()
        
        
    }
})

const frm2 = document.querySelector(".formsaida")
const inp2 = document.querySelector(".inputsaida")
const lst2 = document.querySelector(".ulsaida")
let diferenca = 0

frm2.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp2.value
    if (valor.trim() == "") return
    inp2.value = ""
    diferenca += parseFloat(valor)
    lst2.innerHTML += `
    <li>
     <button>Remover Saída</button>
     <span>${valor}</span>
    </li>
    `
})

lst2.addEventListener('click', (ev) => {
    if (ev.target.closest('button')) {
        diferenca -= parseFloat(ev.target.closest('li').querySelector('span').innerText)
        ev.target.closest('li').remove()
    }
})

const calcsaldo = document.querySelector(".calc")
const saldo = document.querySelector(".saldo")

calcsaldo.onclick = function() {
    let res = soma - diferenca
    saldo.innerText = res
}
