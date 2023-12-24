function myFunc(n, state) {
    console.log("Print my name", n, state);
  }
  
  Function.prototype.betterBind = function (...args) {
    let obj = this,
      params = args.slice(1);
    console.log("args", args);
    return function (...args2) {
      console.log("args2", args2);
      obj.apply(args[0], [...params, ...args2]);
    };
  };
  
  const myFuncCopy = myFunc.betterBind(this, "story", "money");
  myFuncCopy("Thane");