let sesliHarfler: string[] = [];
let sessizHarfler: string[] = [];

const splitter = (str: string): void => {
  str
    .split(" ")
    .join("")
    .split("")
    .map((harf) =>
      "aeiou".includes(harf)
        ? sesliHarfler.push(harf)
        : sessizHarfler.push(harf)
    );

  console.log(sesliHarfler);
  console.log(sessizHarfler);
};

splitter("String bir değer");
