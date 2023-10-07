const btn=document.getElementById('menu-btn')
const menu=document.getElementById('menu')


const input=document.getElementById('link-input')
const linkForm=document.getElementById('link-form')
const errMsg=document.getElementById('err-msg')

btn.addEventListener('click',navToggle)

linkForm.addEventListener('submit',forsubmit)
//toggle mobile mwnu
function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
function forsubmit(e){

    e.preventDefault()
    if(input.value==''){
        errMsg.innerHTML='Please enter something'
        input.classList.add('border-red')
    }
}