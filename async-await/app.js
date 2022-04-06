async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

getUsers().then((data) => console.log(data));

async function gitHubUsers() {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  return data;
}

gitHubUsers().then((data) => console.log(data));
