const formPresupuesto = document.getElementById('formPresupuesto');
const totalDisplay = document.getElementById('total');

const calcularPresupuesto = () => {
    const servicio = parseFloat(document.getElementById('producto').value) || 0;
    const meses = parseInt(document.getElementById('plazo').value) || 0;
    const extra1 = document.getElementById('extra1').checked ? parseFloat(document.getElementById('extra1').value) : 0;
    const extra2 = document.getElementById('extra2').checked ? parseFloat(document.getElementById('extra2').value) : 0;

    let total = servicio + extra1 + extra2;

    if (meses > 1) {
        total -= (meses * 5);
    }

    totalDisplay.innerText = total > 0 ? total.toFixed(2) : 0;
};

document.querySelectorAll('#formPresupuesto input, #formPresupuesto select').forEach(elemento => {
    elemento.addEventListener('change', calcularPresupuesto);
    elemento.addEventListener('input', calcularPresupuesto);
});

formPresupuesto.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Solicitud enviada con éxito. Nos pondremos en contacto con usted, Claudia González Aparicio.');
});