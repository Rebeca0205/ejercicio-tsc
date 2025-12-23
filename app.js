var fecha = "2010-05-12";
var _a = fecha
    .split("-")
    .map(Number), _b = _a[0], y = _b === void 0 ? 0 : _b, _c = _a[1], m = _c === void 0 ? 0 : _c, _d = _a[2], d = _d === void 0 ? 0 : _d;
var persona = {
    year: y,
    month: m,
    day: d
};
var giveAge = function (bd) {
    var result = 2025 - bd.year;
    return "La persona tiene ".concat(result, " a\u00F1os");
};
console.log(giveAge(persona));
