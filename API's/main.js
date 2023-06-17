const videoFile = document.getElementById('videoFile');
const videoPlayer = document.getElementById('video_player');
const empezar = document.getElementById('start');
const detener = document.getElementById ('stop');
const volumen = document.getElementById('volumen');
const cargando = document.getElementById ('cargando');

//Funcionamiento de botones

empezar.addEventListener ('click', () => {
    videoPlayer.play();
});

detener.addEventListener ('click', () => {
    videoPlayer.pause();
});
volumen.addEventListener ('input', (event) => {
    videoPlayer.volume = event.target.value;
});

//Funcionamiento del video
videoPlayer.addEventListener ('loadeddata', () => {
    videoPlayer.style.display = 'block';
    cargando.style.display = 'none';
    
});


function cargarVideo(file) {
    if (file.type.includes('video/mp4')) {

        videoPlayer.style.display = 'none'
        cargando.style.display = 'block';

        const URLfile = URL.createObjectURL(file);
        videoPlayer.src =URLfile ;

    } else {
        alert ('Suba un archivo de video válido');
        

    }
}
videoFile.addEventListener('change',(event) => {
    const file = event.target.files[0];
    cargarVideo(file);
});


