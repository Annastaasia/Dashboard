function checkCatsForm () {
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      //.then((responseJson) => {
        // Do something with the response
      //})
      .catch((e) => {
        alert( "JSON Error: " + e.message ); 
      });

};
document.getElementById('button').addEventListener('click',checkCatsForm);

/*async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
  }
*/





  /*fetch('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
    })
    .then(responce => responce.json())
    .catch(err => console.error(err))
    */


   /* fetch('https://httpbin.org/post', {
    method: 'POST',
    body: new FormData(form),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
})
.then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  })
  //.then((responseJson) => {
    // Do something with the response
  //})
  .catch((e) => {
    alert( "JSON Error: " + e.message ); 
  }); */



  /*const url = 'https://httpbin.org/post';
const data = { body: 'example' };

try {
const response = await fetch(url, {
method: 'POST', 
body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
headers: {
'Content-Type': 'application/json'
}
});
const json = await response.json();
console.log('Успех:', JSON.stringify(json));
} catch (error) {
console.error('Ошибка:', error);
} */