import {Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { Output, EventEmitter } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
@Input() productList;
@Output() notify = EventEmitter;
  productsList: any;
  constructor() { }

  ngOnInit() {
  }

}
