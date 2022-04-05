const http = new easyHTTP();

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

const data = { title: 'New Post', body: 'Body of new post' };

http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

http.put(
  'https://jsonplaceholder.typicode.com/posts/10',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

http.delete(
  'https://jsonplaceholder.typicode.com/posts/10',
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
