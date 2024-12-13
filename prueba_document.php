<!DOCTYPE html>
<html lang="es">
    <!--IGNORAR ESTE ARCHIVO PARA CORRECCION, ES PARA HACER PRUEBAS-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo getElementById</title>
</head>
<body>
    <h1 id="titulo">¡Hola, mundo!</h1>
    <button id="boton">Cambiar texto</button>

    <script>
        let boton = document.getElementById("boton");
        let titulo = document.getElementById("titulo");

        boton.addEventListener("click", () => {
            titulo.textContent = "¡Texto cambiado!";
        });
    </script>
</body>
</html>