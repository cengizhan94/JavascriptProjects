const card = document.querySelectorAll('.memory-card');

function flipcard(){
    this.classList.toggle('flip');
}

card.forEach(card => card.addEventListener('click',flipcard))