import currenciesData from './currencies.json';

export const exchanges = [
  'OKEx',
  'DOBI',
  'Binance',
  'HitBTC',
  'LBank',
  'Coinbene',
  'Coineal',
  'Bibox',
  'Bitforex',
  'Cointiger',
  'IDAX',
  'Bithumb',
  'DigiFinex',
  'BCEX',
  'RightBTC',
  'BitMart',
  'ZB',
  'BW',
  'Simex',
  'upBit',
  'Chaoex',
  'Coinbase',
  'Huobi',
  'DragonEX',
  'Bitinka',
  'Kraken',
  'Bitfinex',
  'Hotbit',
  'Bitstamp',
  'GDAX',
];

export const currencies = currenciesData.map(x => x.code);

export const currencyCodeToName = currenciesData.reduce((acc, x) => {
  acc[x.code] = x.name;
  return acc;
}, {});

export function getCurrencyIcon(currency, useWhite) {
  const folder = useWhite === true ? 'white' : 'default';
  return `/images/${currency}@2x.png`;
}

export function getExchangeIcon(exchange, useWhite) {
  const folder = useWhite === true ? 'white' : 'default';
  const lowercase = exchange.toLowerCase();
  return `/images/${lowercase}@2x.png`;
}

export function randomSellExchange(trade) {
  let { sellExchange } = trade;
  if (trade.status !== 'completed') {
    // Randomize sell exchange until it is different from buy exchange
    do {
      sellExchange = Math.floor(Math.random() * exchanges.length);
    } while (sellExchange === trade.buyExchange);
  }
  return sellExchange;
}
