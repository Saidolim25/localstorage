const input = document.getElementById('input')

const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
  localStorage.setItem('meva', input.value)
})