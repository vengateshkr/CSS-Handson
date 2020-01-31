var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal_action_negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for(var i = 0; i < buttons.length;i++) {
    buttons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
}

backdrop.addEventListener('click',function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener('click',closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click',function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});