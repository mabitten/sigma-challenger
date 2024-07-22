
type Immutable<T> = {
    readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

/**
 * Recursively makes all properties of an object immutable.
 * 
 * @param {T} input The object to freeze.
 * @returns {Immutable<T>} A new immutable version of the object.
 */
const createImmutableObject = function<T extends object>(input: T): Immutable<T> {
    const deepFreeze = function<T>(input: T): Immutable<T> {

        const propertyNames = Object.getOwnPropertyNames(input) as (keyof T)[];
        
        propertyNames.forEach(name => {
            const value = input[name];
            
            if (value && typeof value === 'object' && !Object.isFrozen(input)) {
                deepFreeze(value);
            }
        });

        return Object.freeze(input) as Immutable<T>;
    }

    const immutableObject = deepFreeze(input);

    // Error demonstration
    return new Proxy(immutableObject, {
        set(__, property, _) {
            console.error(`Cannot set property ${String(property)}: object is immutable.`);
            return true;
        },
        deleteProperty(_, property) {
            console.error(`Cannot delete property ${String(property)}: object is immutable.`);
            return true;
        }
    });
}

const myObject = createImmutableObject({ foo: "bar" });

// This will be an error because the object is immutable
(myObject as any).foo = null; // doesn't change the value of the existing prop
(myObject as any).property = "I can't add new fields"; // doesn't add a new prop to the

console.log(myObject); // Output: { foo: 'bar' }
