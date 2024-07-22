
interface NodeList {
    map<U>(callbackfn: (value: Element, index: number, array: Element[]) => U, thisArg?: any): U[];
}

NodeList.prototype.map = function<U>(callbackfn: (value: Element, index: number, array: Element[]) => U, thisArg?: any): U[] {
    return Array.prototype.map.call(this, callbackfn, thisArg) as U[];
};

const getAllDivs = document.querySelectorAll('div').map(element => element.className);
console.log(getAllDivs);