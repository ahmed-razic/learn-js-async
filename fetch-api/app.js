document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getAPIData);

//using arrow functions
function getText() {
  window
    .fetch('./text.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getJSON() {
  window
    .fetch('./posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (post) {
        output += `<hr/><li>${post.title}</li> <li>${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAPIData() {
  window
    .fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (user) {
        output += `<hr/><li>${user.id}</li> <li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
