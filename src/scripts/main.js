

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(event){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo= parseInt(numeroMaximo);
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio);

        document.getElementById('resultado-valor').innerText= numeroAleatorio;
        document.querySelector('.resultado').computedStyleMap.display = 'block';   })
})