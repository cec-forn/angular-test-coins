import { Component, OnInit } from '@angular/core';
import { ICryptoCurrencies } from '../icrypto-currencies';
import { CryptoCurrenciesService } from '../crypto-currencies.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  cryptoCurrencies: ICryptoCurrencies | null = null;

  searchText: string = '';

  constructor (private cryptoService: CryptoCurrenciesService) {  }

  ngOnInit(): void {
    this.getCrypto();
  }

  getCrypto() {
    this.cryptoService.fetchAll().subscribe(data => {
      this.cryptoCurrencies = data;
      return this.cryptoCurrencies;
    })
  }

}
