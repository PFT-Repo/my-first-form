import { Component } from '@angular/core';
import { AES } from 'crypto-js';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})

export class EncryptComponent {
  text="";
  hash="";

  encrypt() {
    this.hash = AES.encrypt(this.text,'key').toString();
  }
}

