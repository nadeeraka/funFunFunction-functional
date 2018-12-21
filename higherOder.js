let dump = [
  {
    name: "kim kadashani",
    dis: "pece of shit"
  },
  {
    name: "adel",
    dis: "good singer"
  }
];
let arr = [];

const felterOb = a => {
  arr = dump.filter(res => res.name === "kim kadashani");
  return arr;
};
console.log(object);

// let arr = [];
// for (const a of dump) {
//   //console.log(a.name);
//   if (a.name === "adel") {
//     arr.push(a);
//   }
// }
// console.log(arr);
