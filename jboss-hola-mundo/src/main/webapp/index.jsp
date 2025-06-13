<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludos desde JBoss</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(to right, #ece9e6, #ffffff);
            color: #333;
            text-align: center;
        }
        .container {
            background-color: #ffffff;
            padding: 50px;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            max-width: 600px;
            animation: fadeIn 1s ease-out;
        }
        h1 {
            color: #d10000; /* Rojo JBoss/Red Hat */
            font-size: 3.5em;
            margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        p {
            font-size: 1.3em;
            color: #555;
            line-height: 1.6;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hola desde JBoss</h1>
        <p>¡Tu aplicación web ha sido desplegada con éxito en el servidor de aplicaciones!</p>
        <p><strong>Desplegado en:</strong> <%= new java.util.Date() %></p>
        <p>Esta página fue servida por un contenedor web Java EE/Jakarta EE.</p>
    </div>
</body>
</html>