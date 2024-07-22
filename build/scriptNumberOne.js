"use strict";
NodeList.prototype.map = function (callbackfn, thisArg) {
    return Array.prototype.map.call(this, callbackfn, thisArg);
};
const getAllDivs = document.querySelectorAll('div').map(element => element.className);
console.log(getAllDivs);
