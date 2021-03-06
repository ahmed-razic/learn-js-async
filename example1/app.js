document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './data.txt', true);

  xhr.onprogress = function () {
    //onprogress can be used for spinners and simillar during fetching data
    console.log('Readystate: ', xhr.readyState);
  };

  xhr.onload = function () {
    console.log('Readystate: ', xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }

    xhr.onerror = function () {
      console.log('Error...');
    };

    xhr.send();
  };
}
