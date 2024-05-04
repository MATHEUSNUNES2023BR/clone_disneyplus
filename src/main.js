const butoes = document.querySelectorAll('[data-tab-button]')
const uls = document.querySelectorAll('[data-tab-id]')

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