Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})
camera = document.getElementById("webcam");

Webcam.attach( '#webcam' );

function capture()
{
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_url+'"/>';
    });

}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cmk8ePQq5/model.json', modelLoaded)