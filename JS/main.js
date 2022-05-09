const share = document.querySelector('.share');
const ballon = document.querySelector('.ballon');

function clickShare() {
    ballon.classList.toggle('hidden');
}

share.addEventListener('click', clickShare);