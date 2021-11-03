const objectFormatter = JSON.stringify(
  {
    name: "mesut",
    surName: "caga",
    link: "www.google.com.tr",
  },
  null,
  1 // boşluk sayısı
);

// console.log(objectFormatter);

const objectFormatter2 = (obje: Object | any[]) => {
  const replacer = null;
  const space: number = 4;
  const formatter = JSON.stringify(obje, replacer, space);

  return console.log(formatter);
};

const objec: Object | any[] = [
  {
    name: "Ahmet",
    point: 1,
    createDate: "2021-11-01T12:32:51.211Z",
  },
];

objectFormatter2(objec);
