function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

let sum = (x, y) => x + y;
let noo = noisy(sum);
noo(1, 2);
