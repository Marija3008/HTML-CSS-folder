function getType(value) {
  let type = typeof(value);
  console.log(type);
  return type;
}

getType([]); // object
getType(true); // boolean
getType(10); // number
getType("7"); // string
getType(undefined); // undefined
