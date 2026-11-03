const frm1 = document.querySelector(".entrada-form")
const inp1 = document.querySelector(".entrada-input")
const lst1 = document.querySelector(".entrada-ul")
let soma = 0

frm1.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp1.value
    if (valor.trim() == "") return
    inp1.value = ""
    soma += parseFloat(valor)
    lst1.innerHTML += `
    <li>
     <button>Retirar Entrada</button>
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

const frm2 = document.querySelector(".saida-form")
const inp2 = document.querySelector(".saida-input")
const lst2 = document.querySelector(".saida-ul")
let diferenca = 0

frm2.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp2.value
    if (valor.trim() == "") return
    inp2.value = ""
    diferenca += parseFloat(valor)
    lst2.innerHTML += `
    <li>
     <button>Retirar Saída</button>
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

const calcsaldo = document.querySelector(".calculo")
const saldo = document.querySelector(".saldo")

calcsaldo.onclick = function() {
    let res = soma - diferenca
    saldo.innerText = res
}