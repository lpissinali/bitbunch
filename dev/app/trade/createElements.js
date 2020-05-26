import anime from 'animejs';
import { currencies, exchanges, getExchangeIcon, getCurrencyIcon } from './model';
import { state } from './state';
import { BREAK_POINT, VERTICAL_HEIGHT } from './layout';

const container = document.getElementById('trade-display');

const currenciesBox = container.querySelector('.currencies-box .scrolling-area');
const buyExchangesBox = container.querySelector('.buyExchanges-box .scrolling-area');
const sellExchangesBox = container.querySelector('.sellExchanges-box .scrolling-area');
const exchangeBoxTemplate = container.querySelector('defs .exchange-box');
const currencyBoxTemplate = container.querySelector('defs .currency-box');

function createExchangeBox(imgLink) {
  const node = exchangeBoxTemplate.cloneNode(true);
  const img = node.querySelector('image');
  img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imgLink);
  return node;
}

function createCurrencyBox(imgLink) {
  const node = currencyBoxTemplate.cloneNode(true);
  const img = node.querySelector('image');
  img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imgLink);
  return node;
}

function createBoxes(target, creator, object, imageSource) {
  const size = object.size + object.gap;
  const MAX_SPACE = Math.max(BREAK_POINT, VERTICAL_HEIGHT);
  const offCount = Math.ceil(MAX_SPACE / size);
  const count = Math.max(imageSource.length, offCount);
  object.min = -imageSource.length * size + offCount * size;
  object.max = offCount * size;
  object.distance = object.max - object.min;
  for (let i = -offCount; i < imageSource.length; i++) {
    let index = Math.round(i % imageSource.length);
    if (index < 0) {
      index = imageSource.length + index;
    }
    const image = imageSource[index];
    const element = creator(image);
    target.appendChild(element);
  }
}

export function createElements() {
  const currencyIcons = currencies.map(getCurrencyIcon);
  createBoxes(currenciesBox, createCurrencyBox, state.columns.currencies, currencyIcons);
  const exchangeIcons = exchanges.map(getExchangeIcon);
  createBoxes(buyExchangesBox, createExchangeBox, state.columns.buyExchanges, exchangeIcons);
  createBoxes(sellExchangesBox, createExchangeBox, state.columns.sellExchanges, exchangeIcons);
}
