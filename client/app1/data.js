const data = {
  fetch () {
    return new Promise(function (resolve, reject) {

      const mock = [{
        _id: 'j15y4ui5y1uyti87rt',
        name: 'Variables',
        description: `ES6 (also known as ES2015) brings you new ways to declare
          your variables thanks to let and const, but also keeps var in the
          language specification.`,
        completed: true
      }, {
        _id: '45d7fgsd45fas5a74s',
        name: 'Modules',
        description: `JavaScript has had modules for a long time. However, they
          were implemented via libraries, not built into the language. ES6 is
          the first time that JavaScript has built-in modules.`,
        completed: true
      }, {
        _id: '1fghr1g7f1g4dfg77',
        name: 'Arrow functions',
        description: `An arrow function expression has a shorter syntax compared
          to function expressions and does not bind its own this, arguments,
          super, or new.target.`,
        completed: false
      }];

      setTimeout(function () {
        resolve(mock);
      }, 1000);
    });
  }
};

export default data;
