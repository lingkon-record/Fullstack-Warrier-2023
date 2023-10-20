// let vs const
{
  var x = 1;
}
console.log(x); // 1

{
  const x2 = 1;
}
console.log(x2); // ReferenceError: x2 is not defined
