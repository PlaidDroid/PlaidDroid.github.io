// var file = File.create("../content/log");
// var reader = new FileReader();

// // var file = new File([], file, {type: 'text/plain'});
// // reader.onload = function(e) {
// //     var blob = new Blob([new Uint8Array(e.target.result)], {type: file.type });
// //     console.log(blob);
// //     console.log(file);
// // };
// // reader.readAsArrayBuffer(file);
// reader.readAsText(file);
// console.log(reader.result);
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementsByClassName("content").innerHTML = "<p>"+this.responseText+"<p>";
      }
    };
    xhttp.open("GET", "../content/logs.txt", true);
    xhttp.send();
  }
