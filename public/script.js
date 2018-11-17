// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });

$( document ).ready(function() {
  console.log( "ready!" );


var widget = uploadcare.Widget('[role=uploadcare-uploader]');

    widget.onUploadComplete(function (fileInfo) {

            console.log('File name: ', fileInfo.name);
            console.log('CDN URL: ', fileInfo.cdnUrl);
          var profile = (fileInfo.cdnUrl);  
          $(".profile").append('<img src=' + fileInfo.cdnUrl + '>');
          // $(".circle").append('<img src="' + fileInfo.cdnUrl + '">');


            $.ajax({
              url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=gJZ3nUhkeoCAF0PEtxIPqnpKJqdZ2WCI&api_secret=j6_u1B2jNR4K5BGCIyRBrPHhnoYyQ6Vs&image_url='+profile+'&return_attributes=age,gender,emotion',
              method: 'POST'
            }).done(function(response){
            // console.log(response);
            var beer = "";
            var detect = (response.faces[0].attributes.emotion);
            var happiness = (response.faces[0].attributes.emotion.happiness);
            var sadness = (response.faces[0].attributes.emotion.sadness);
            var disgust = (response.faces[0].attributes.emotion.disgust);
            var anger = (response.faces[0].attributes.emotion.anger);
            var surprise = (response.faces[0].attributes.emotion.surprise);
            console.log(detect)
            console.log(response);
            $(".happiness").append("Happiness: " + happiness)
            $(".sadness").append("Sadness: " + sadness)
            $(".disgust").append("Disgust: " + disgust)
            $(".anger").append("Anger: " + anger)
            $(".surprise").append("Surprise: " + surprise)
            if (happiness > 25){
              var beer = "happy"
              console.log("search is: " + beer);
            } else if (sadness > 25){
              var beer = "sad"
              console.log("search is: " + beer);
            } else if (disgust > 25){
              var beer = "disgusting"
              console.log("search is: " + beer);
            } else if (anger > 25){
              var beer = "angry"
              console.log("search is: " + beer);
            } else if (surprise > 25){
              var beer = "surprise"
              console.log("search is: " + beer);
            }else{
              var beer = "robot"
              console.log("What is Emotion?");
            }
              
            
            // var obj = JSON.parse(face)
            // output.innerHTML += emotion;

            // var beer = "happy";
            // $.ajax({
            //   url:"https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=92627&type=brewery&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
            //   method: 'GET'
            //   }).done(function(response){
            //     console.log(response)
            $.ajax({
              // url:"https://sandbox-api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=59f2f6316eed4ddaf8ce120c8cd8e2e8",
              url:"https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
              method: 'GET'
              }).done(function(response){

                // Random number so user doesn't always get same top result
                var beerChoice= Math.floor(Math.random() * 50) + 1  
                  console.log(response.data[beerChoice].name)
                  // console.log(response.data[i].labels.medium)
                  console.log("ABV: " + response.data[beerChoice].style.abvMax + "%")
                  $(".name").append(response.data[beerChoice].name)
                  $(".abv").append("ABV: " + response.data[beerChoice].style.abvMax + "%")
                  // $(".image").append('<img src="' + response.data[i].labels.medium + '">')
                  console.log("random number is: " + beerChoice)
                
              
              });
              
            });
          });
        });