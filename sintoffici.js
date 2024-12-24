let frame = /* some value or undefined */;

let obj = {
  // Other properties
  ...(frame !== undefined ? { frame: frame } : {})
};

console.log(obj);
