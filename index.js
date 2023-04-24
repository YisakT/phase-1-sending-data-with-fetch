

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object){
    console.log(object);
  })
  .catch(function (error) {
    alert("Caution amature coder");
    console.log(error.message);
  })
  
  function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(response => response.json())
    .then(result => {
      document.body.innerHTML = result.id
    })
    .catch(error => {
      document.body.innerHTML = error.message
    })
  }
  
