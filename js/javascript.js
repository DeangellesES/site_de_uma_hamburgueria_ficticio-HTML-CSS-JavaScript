/*função para o menu hamburguer funcionar*/
function MENUCLICK() {
    const menuClick = document.querySelector('header .bg  i')
    const nav = document.querySelector(' header .bg  nav ul')

    menuClick.addEventListener('click', clicou)

    function clicou() {
        nav.classList.toggle("ativo")
    }
} 

MENUCLICK()

/* função para clicar nos icones de circulos pretos e chamar o texto equivalente*/
function lista() {
    const lista = document.querySelectorAll('.js-texto p')
    const listaIcone = document.querySelectorAll('.js-texto i')
    lista[0].classList.add('ativo')

    function clickLista(index) {
        lista.forEach((item) => {
            item.classList.remove('ativo')
        })
        lista[index].classList.add('ativo')
    }

    listaIcone.forEach((item, index) => {
        item.addEventListener('click', () => {
            clickLista(index)
        })
    })
}

lista()


/*função que traz os itens de lado, apartir do evento scroll, comforme vai descendo a tela, junto com animações keyframes*/ 
const scroll = document.querySelectorAll('.js-scroll')
const height = window.innerHeight * 0.6
scroll[0].classList.add('ativo')

function mouseScroll() {
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if(sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScroll)
