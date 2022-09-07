//Alert de sección "sobre nosotros" del NavBar (Por ahora 😅)

document.getElementById('nosotros').addEventListener('click', ()=>{
    Swal.fire({
        icon: 'warning',
        title: ':(',
        text: 'Pagina todavia en proceso!',
        footer: 'Estamos trabajando en ello😅'
    })
})







//Alerts de las redes sociales.

document.getElementById("rede1").addEventListener('click', ()=>
Swal.fire({
    icon: 'warning',
    title: ':(',
    text: 'Perdon no tenemos ningun tipo de redes',
    footer: 'Es solo estetica👾'
})
)

document.getElementById("rede2").addEventListener('click', ()=>
Swal.fire({
    icon: 'warning',
    title: ':(',
    text: 'Perdon no tenemos ningun tipo de redes',
    footer: 'Es solo estetica👾'
})
)

document.getElementById("rede3").addEventListener('click', ()=>
Swal.fire({
    icon: 'warning',
    title: ':(',
    text: 'Perdon no tenemos ningun tipo de redes',
    footer: 'Es solo estetica👾'
})
)

document.getElementById("rede4").addEventListener('click', ()=>
Swal.fire({
    icon: 'warning',
    title: ':(',
    text: 'Perdon no tenemos ningun tipo de redes',
    footer: 'Es solo estetica👾'
})
)



//Alerts del Carrousel

document.getElementById("swiperlink1").addEventListener('click', ()=> {
    alertify.error('Por el momento esta sección no está disponible 😅')
})

document.getElementById("swiperlink2").addEventListener('click', ()=> {
    alertify.error('Por el momento esta sección no está disponible 😅')
})

document.getElementById("swiperlink3").addEventListener('click', ()=> {
    alertify.error('Por el momento esta sección no está disponible 😅')
})

document.getElementById("swiperlink4").addEventListener('click', ()=> {
    alertify.error('Por el momento esta sección no está disponible 😅')
})