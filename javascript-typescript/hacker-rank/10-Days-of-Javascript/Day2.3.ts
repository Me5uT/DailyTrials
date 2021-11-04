function vowelsAndConsonants(s: string) {
  let sesliHarfler: string[] = [];
  let sessizHarfler: string[] = [];

  s.split("").map((harf: string) => {
    "aeiou".includes(harf) ? sesliHarfler.push(harf) : sessizHarfler.push(harf);
  });

  console.log([...sesliHarfler, ...sessizHarfler].join("\n"));
}

vowelsAndConsonants("javascriptloops");
