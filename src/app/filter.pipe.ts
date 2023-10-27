import { Pipe, PipeTransform } from '@angular/core';
import { CryptoCurrenciesService } from './crypto-currencies.service';
import { CoinsComponent } from './coins/coins.component';
import { ICryptoCurrencies } from './icrypto-currencies';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coins: any, name: any, searchText?: string): any {
    if (!coins) return [];
    if (!searchText || !name) return coins;
 
    return coins.includes(searchText);
  }
}