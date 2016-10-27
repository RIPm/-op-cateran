const compose = function(f,g) {
  return function(x) {
    console.log(g(x))
    return f(g(x));
  };
};

export const _ = {
  compose
}
