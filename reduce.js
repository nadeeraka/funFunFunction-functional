let arr = [1, 7, 8, 0, 5, 7, 8, 9, 5, 6, 7];

// search for max

let x = 0;
const max = a => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > x) {
      x = a[i];
    }
  }
  return x;
};

console.log(max(arr));
