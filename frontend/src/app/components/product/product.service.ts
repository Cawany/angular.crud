import { Product } from "./Product";
import { Injectable } from '@angular/core';
import { MatSnackBar } from'@angular/material/snack-bar';
import { HttpClient } from'@angular/common/http' 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

 public baseUrl: string = "http://localhost:3001/products"
  /*public baseUrl: string = "http://localhost:3001/products"*/

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  /*create(product: Product):Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
    observable faz a checagem de tipo, no caso Product
  }*/

 create(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product)
 }
 /*vai retornar um Observable e dentro desse Observable 
 vai retornar uma lista de produto */
 read(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl)
 }

 readById(id: String):Observable<Product> {
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
 }

 update(product: Product):Observable<Product> {
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product)
 }

 /*delete(product: Product): Observable<Product> {
  const url = `${this.baseUrl}/${product.id}`
  return this.http.delete<Product>(url, product)
 }*/

}
