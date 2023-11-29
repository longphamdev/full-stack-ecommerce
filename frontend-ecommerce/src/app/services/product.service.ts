import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
 
 
  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) {}
  
  getProductList(theCategoryId: number): Observable<Product[]> {
    // build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response:GetResponseProducts) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {

    const searchUrl = `${this.categoryUrl}`;
    return this.httpClient.get<GetResponseProductCategory>(searchUrl).pipe(map((response:GetResponseProductCategory) => response._embedded.productCategory));
  }
  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response:GetResponseProducts) => response._embedded.products));
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient
      .get<Product>(productUrl)
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}