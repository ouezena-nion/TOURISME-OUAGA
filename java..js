<!DOCTYPE html>  
<html lang="fr">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Page en Plein Écran</title>  
    <style>  
        body {  
            margin: 0;  
            height: 100vh;  
            display: flex;  
            justify-content: center;  
            align-items: center;  
            background-color: lightcoral;  
            color: white;  
            font-size: 2em;  
        }  
    </style>  
</head>  
<body>  
    <div>  
        Bienvenue sur la page en plein écran !  
    </div>  
    <script>  
        document.addEventListener("DOMContentLoaded", function() {  
            // Attendez que la page soit complètement chargée  
            if (document.documentElement.requestFullscreen) {  
                document.documentElement.requestFullscreen();  
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox  
                document.documentElement.mozRequestFullScreen();  
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari et Opera  
                document.documentElement.webkitRequestFullscreen();  
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge  
                document.documentElement.msRequestFullscreen();  
            }  
        });  
    </script>  
</body>  
</html>