const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => (a > b ? b : a);

const maxb = (a, b) => (a > b ? a : b);

const add = (...args) => args.reduce((sum, a) => (sum += a), 0);

const sub = (...args) => args.reduce((val, a) => (val -= a));

const mul = (...args) => args.reduce((val, a) => val *= a, 1);

const min = (...args) => args.reduce((a, b) => a > b ? b : a);

const max = (...args) => args.reduce((a, b) => a > b ? a : b);

const addRecurse = (...args) => {
  if (args.length < 1)
    return 0;
  
  return args[0] + addRecurse(...args.slice(1));
}

const mulRecurse = (...args) => {
  if (args.length < 1)
    return 1;
  
  return args[0] * mulRecurse(...args.slice(1));
}

const minRecurse = (...args) => {
  if(args.length < 1)
    return 1;

  return args[0] > minRecurse(...args.slice(1)) ? minRecurse(...args.slice(1)) : args[0];
}

const maxRecurse = (...args) => {
  if(args.length < 1)
    return 1;

  return args[0] < maxRecurse(...args.slice(1)) ? maxRecurse(...args.slice(1)) : args[0];
}

const not = (func) => {
  return (...args) => !func(...args);
}

const acc = (f, initVal) => {
  return(...nums) => {
      return nums.reduce((acc, num) => {
          return f(acc,num);
      }, initVal);
  }
  
}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  // accPartial,
  // accRecurse,
  // fill,
  // fillRecurse,
  // set,
  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
