const color1 = document.getElementsByName('color1')[0]
const color2 = document.getElementsByName('color2')[0]
const css = document.querySelector('h3')
const BodyBackground = document.getElementById('gradient')

color1.addEventListener('input',()=>{
    css.textContent = BodyBackground.style.background
    BodyBackground.style.background = "linear-gradient(to right,"+ color1.value+","+color2.value+")"
})

color2.addEventListener('input',()=>{
    css.textContent = BodyBackground.style.background
    BodyBackground.style.background = "linear-gradient(to right,"+ color1.value+","+color2.value+")"

})


