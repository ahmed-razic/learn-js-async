document.getElementById('get-cars').addEventListener('click', getCars);

function getCars() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
  };

  xhr.onerror = function () {
    console.log('Request failed');
  };

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.warn(`HTTP Status ${xhr.status}: ${xhr.responseText}`);
    } else {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      let output = '';

      response.forEach(function (item) {
        output += `
        <hr/>
        <li>Manufactor: ${item.manufactor}</li>
        <li>Model: ${item.model}</li>
        <li>Owner: ${item.owner}</li>
        <li>Used: ${item.used}</li>
        <li>Year Built: ${item.year}</li>
        `;
      });

      document.getElementById('cars').innerHTML = output;
    }
  };
  xhr.open('GET', './cars.json', true);
  xhr.send();
}
