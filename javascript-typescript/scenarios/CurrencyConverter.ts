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
interface IExchangeModel {
  currency: Currencies;
  rate: number;
}

// girilen para biriminin sembole dönüştürülmesi
const convertCurrencyToSymbol = (currency: Currencies): string => {
  return CurrencySymbols[currency];
};

convertCurrencyToSymbol(Currencies.Euro);

// rates array içierisinde objeler currencies,rate
// fonksiyon Tl karşılığını verecek
const rates: IExchangeModel[] = [
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

const convertCurrencyToLira = (count: number, currency: Currencies): string => {
  // eşleşen currency i bul
  let matchedRate = rates.find((a) => a.currency == currency);

  if (matchedRate == undefined) {
    matchedRate = {
      currency: Currencies.TurkishLira,
      rate: 1,
    };
  }
  const convertedCount = count / matchedRate.rate;
  const convertedCurrency = convertCurrencyToSymbol(currency);

  // verilen currency nin Türk Lirası karşılığını bul
  return `${count} ${Currencies.TurkishLira} = ${convertedCount} ${convertedCurrency}`;
};
console.log(convertCurrencyToLira(11, Currencies.Euro));
