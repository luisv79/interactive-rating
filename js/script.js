const sectionNumeros = document.querySelector('#rating-numeros');
const rackNumeros = document.querySelector('.thank-resultado');
const submitBotton = document.querySelector('.rating-send');
const ratingState = document.querySelector('.rating');
const thankState = document.querySelector('.thank');

sectionNumeros.addEventListener('click', event=>{
    let selectNumeros = event.target.innerText;
    rackNumeros.innerText = selectNumeros;
    if (selectNumeros >0 || selectNumeros <=5) {
        submitBotton.addEventListener('click', ()=>{
            ratingState.style.display = 'none';
            thankState.style.display = 'block';
        
        });
    }
});

