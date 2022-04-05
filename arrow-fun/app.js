//const sayHello = (name) => `Hello ${name}`;
const sayHello = (name) => `Hello ${name}`;

const getObject1 = () => {
  return { firstName: 'Ahmed', lastName: 'Razic' };
};

const getObject2 = () => ({ firstName: 'Ahmed', lastName: 'Razic' });

const users = ['Ahmed', 'Ibrahim', 'Osman'];

const nameLengths = users.map((name) => name.length);

console.log(sayHello('Ahmed'));
console.log(getObject1());
console.log(getObject2());
console.log(nameLengths);
