import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent {
  text="";
  hash="";

  encrypt() {
    this.hash = CryptoJS.AES.decrypt(this.text,'key').toString(CryptoJS.enc.Utf8); 
  }
}
