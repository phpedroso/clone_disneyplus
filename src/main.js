document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            hideItemMenu();
        }
        else {
            viewItemMenu();
        }
    })


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabTarget = botao.target.dataset.tabButton;
            const tbs = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTabs();
            tbs.classList.add('shows__list--is-active');
            hideButton();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseQuestion);
    }
})

function openCloseQuestion(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);   
}

function hideButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function hideItemMenu() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function viewItemMenu() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}