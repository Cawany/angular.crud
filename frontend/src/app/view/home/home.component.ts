import { HeaderService } from './../../components/template/header/header.service';
import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(): void {}
}
