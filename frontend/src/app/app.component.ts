import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>FullStack Angular + .NET + Docker</h1>
    <button (click)="load()">Load Products from API</button>
    <ul>
      <li *ngFor="let p of products">{{p.name}} - {{p.price}}</li>
    </ul>
    <p>API: http://localhost:5000/api/products</p>
  `
})
export class AppComponent implements OnInit {
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() { this.load(); }
  load() {
    this.http.get<any[]>('http://localhost:5000/api/products').subscribe(d => this.products = d);
  }
}