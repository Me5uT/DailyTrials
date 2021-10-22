// 2 enum, 1. Currencies 2.CurrencySymbols
// 1 fonksiyon girdi olarak Currencies enum , output string CurrencySymbols

enum Currencies {
  TurkishLira = "TL",
  UsDollar = "USD",
  Euro = "EUR",
}

enum CurrencySymbols {
  TL = "₺",
  USD = "$",
  EUR = "€",
}

const converter = (currency: Currencies): string => {
  return CurrencySymbols[currency];
};

converter(Currencies.Euro);
console.log("converter", converter);
// rates array içierisinde objeler currencies,rate
// fonksiyon Tl karşılığını verecek
const rates = [
  {
    currency: Currencies.TurkishLira,
    rate: 1,
  },
  {
    currency: Currencies.UsDollar,
    rate: 9.6,
  },
  {
    currency: Currencies.Euro,
    rate: 11,
  },
];

const currencyConverter = (count: number, currency: Currencies) => {
  // eşleşen rate i bul
  const matchedRate = rates.find((a) => {
    return a.currency == currency;
  });
  const converted = converter(currency);
  // verilen currency değerini bul
  return `${count} ${Currencies.TurkishLira} = ${
    count / matchedRate.rate
  } ${converted}`;
};
currencyConverter(11, Currencies.Euro);
