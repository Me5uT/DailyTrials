const obj = {
  a: {
    x: {
      j: ["Mesut", "Çağa"],
    },
  },
  b: [
    1,
    [
      4,
      5,
      {
        n: { m: { r: ["Javascript", "Typescript"] } },
      },
      6,
    ],
    3,
  ],
};

const {
  a: {
    x: {
      j: [, surname],
    },
  },

  b: [
    ,
    [
      ,
      ,
      {
        n: {
          m: {
            r: [, tech],
          },
        },
      },
      ,
    ],
    ,
  ],
} = obj;

console.log(`${surname} is a ${tech} developer`);
