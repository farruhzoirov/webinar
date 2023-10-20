const elReceptionButton = document.querySelector('.page-main__reception');
const elModalContainer  = document.querySelector('.js-modal-container');
const elModalCloser = document.querySelector('.js-modal-container__closer')

elReceptionButton.addEventListener('click' ,function () {
    elModalContainer.classList.add('modal-container--open')
})


elModalCloser.addEventListener('click',function () {
    elModalContainer.classList.remove('modal-container--open')
})

