const a = function () {
  console.log('a');
};
const b = function () {
  a();
  console.log('b');
};

export { b };
