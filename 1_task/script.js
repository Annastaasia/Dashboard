const url = 'https://httpbin.org/post';

window.onerror = function(message, url, lineNumber) {
  alert("Catch error in Global Internet!\n" +
    "Massege: " + message + "\n(" + url + ":" + lineNumber + ")");
};

function checkCatsForm (){
    fetch(url, {
        method: 'POST',
        body: new FormData(form),
    })
    .then((response) => {
      try{
        if (!response.ok) {
          throw new Error('Something went wrong, try again');
        }
        
      } catch(error) {
        alert( "JSON Error: " + error.message); 
      }
      try{
        if (response.status != 200) {
          return null;
        }
          throw new Error('Something went wrong, try again');
      } catch(error) {
        alert( "Status Error: " + error.message); 
      }
        });
    }
document.getElementById('button').addEventListener('click',checkCatsForm);

