document.getElementById('btnClick').addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
});

//Este es un metodo para obtener el valor de un input y mostrarlo en un div
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email + ', Teléfono: ' + tel;
});