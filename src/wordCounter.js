export default function wordCounter(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  }).length;
}
