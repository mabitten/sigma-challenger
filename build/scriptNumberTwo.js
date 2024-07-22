"use strict";
/**
 * Recursively makes all properties of an object immutable.
 *
 * @param {T} input The object to freeze.
 * @returns {Immutable<T>} A new immutable version of the object.
 */
const createImmutableObject = function (input) {
    const deepFreeze = function (input) {
        const propertyNames = Object.getOwnPropertyNames(input);
        propertyNames.forEach(name => {
            const value = input[name];
            if (value && typeof value === 'object' && !Object.isFrozen(input)) {
                deepFreeze(value);
            }
        });
        return Object.freeze(input);
    };
    return deepFreeze(input);
};
const myObject = createImmutableObject({ foo: "bar" });
// This will be an error because the object is immutable
myObject.foo = null; // doesn't change the value of the existing prop
myObject.property = "I can't add new fields"; // doesn't add a new prop to the
console.log(myObject); // Output: { foo: 'bar' }
