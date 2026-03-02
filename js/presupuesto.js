/**
 * Lógica para el cálculo dinámico del presupuesto y validación de formulario
 * Realizado por Claudia González
 */

const form = document.getElementById('formPresupuesto');
const totalDisplay = document.getElementById('total');
const btnEnviar = document.getElementById('btnEnviar');

// Función para calcular el precio final en tiempo real
const calcularPresupuesto = () => {
    const productoSelect = document.getElementById('producto');
    const precioBase = parseFloat(productoSelect.value) || 0;
    const meses = parseInt(document.getElementById('plazo').value) || 1;
    const extra1 = document.getElementById('extra1').checked ? 50 : 0;
    const extra2 = document.getElementById('extra2').checked ? 100 : 0;

    // Lógica de presupuesto: Suma de base + extras
    let total = precioBase + extra1 + extra2;

    // Aplicamos un descuento del 5% si el plazo es superior a 6 meses
    if (meses > 6) {
        total *= 0.95;
    }

    // Mostramos el total en el HTML
    totalDisplay.innerText = total.toFixed(2);

    // Si no hay producto seleccionado, el botón se mantiene deshabilitado (Punto 3.2 de la corrección)
    if (precioBase === 0) {
        btnEnviar.disabled = true;
        btnEnviar.style.opacity = "0.5";
    } else {
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = "1";
    }
};

// Escuchamos cambios en inputs, select y checkboxes para actualizar en vivo
form.addEventListener('input', calcularPresupuesto);
form.addEventListener('change', calcularPresupuesto);

// Validación manual estricta antes del envío
form.addEventListener('submit', (e) => {
    const telefono = document.getElementById('telefono').value;
    const privacidad = document.getElementById('privacidad').checked;
    const regexTel = /^[0-9]{9}$/; // Valida exactamente 9 números

    // Validar teléfono (Punto 3.1)
    if (!regexTel.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido (9 dígitos).");
        e.preventDefault();
        return;
    }

    // Validar checkbox de privacidad (Punto 3.2)
    if (!privacidad) {
        alert("Debes aceptar la política de privacidad.");
        e.preventDefault();
        return;
    }

    alert('Solicitud enviada con éxito. Contactaremos con usted en breve.');
});

// Ejecutamos una vez al cargar para establecer el estado inicial del botón
calcularPresupuesto();