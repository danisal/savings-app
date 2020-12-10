import { writable } from 'svelte/store';

export const products = writable([
  {id:0, name: 'Mimosa', quantity: 6, price: 3.54, perUnit: 0},
  {id: 1, name: 'Terra Nostra', quantity: 6, price: 4.62, perUnit: 0},
  {id: 2, name: 'Nova Açores', quantity: 6, price: 3.54, perUnit: 0},
]);