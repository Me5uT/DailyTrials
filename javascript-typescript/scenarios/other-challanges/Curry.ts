const join = (a: string, b: string, c: string): string => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

curriedJoin(1, 2, 3); // '1_2_3'

curriedJoin(1)(2, 3); // '1_2_3'

curriedJoin(1, 2)(3); // '1_2_3'

function curry(fn: any): any {
  // your code here

  return function curried(...args: any) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
