document.addEventListener('DOMContentLoaded',()=>{
    const butoes = document.querySelectorAll('[data-tab-button]')
    const uls = document.querySelectorAll('[data-tab-id]')
    
    const accordion = document.querySelectorAll('.faq__questions__item__question')    

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', ()=>{
        const posicaoAtual = window.scrollY
        if(posicaoAtual < alturaHero){
            ocultarElementosDoHeader()
        }else{
            exibeElementosDoHeader()
        }
    })
    //Seção de atrações, programação das abas
    butoes.forEach((btns)=>{
        btns.addEventListener('click', (btnSelect)=>{
            butoes.forEach((btns)=>{
                btns.classList.remove('shows__tabs__button--is-active')
            })
            uls.forEach((ul)=>{
                ul.classList.remove('shows__list--is-active')
            })
            
            const dataSelect = `[data-tab-id="${btnSelect.target.dataset.tabButton}"]`
            const ulSelect = document.querySelector(dataSelect)
    
            btns.classList.add('shows__tabs__button--is-active')
            ulSelect.classList.add('shows__list--is-active')
        })
    })
    //Seção FAQ, accordion
    accordion.forEach((questions)=>{
        questions.addEventListener('click', (quest)=>{
            const ans = questions.nextElementSibling
            questions.classList.toggle('faq__questions__item__question--is-open')
            ans.classList.toggle('faq__questions__item__answer--is-open')
        })
    })
})
function ocultarElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}
function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}