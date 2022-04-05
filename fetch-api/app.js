document.getElementById('button1').addEventListener('click', getText);

function getText() {
  window
    .fetch('./text.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
