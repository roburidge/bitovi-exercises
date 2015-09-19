// Context
// person.name
// DOT(person, 'name');
DOT = function(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else if (obj.__proto__) {
    return DOT(obj.__proto__, prop);
  }
};

// Context
// person.speak()
// DOTCALL(person, 'speak', [])
DOTCALL = function(obj, prop, args) {
  return DOT(obj, prop).apply(obj, args);
};
