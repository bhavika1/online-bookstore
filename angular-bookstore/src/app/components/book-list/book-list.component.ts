import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {
      sku : "text-100",
      name : "C Programming Language",
      description : "Learn C Programming Language",
      unitPrice : 600.00,
      imageUrl : "assets/images/books/text-100.jpg",
      active : true,
      unitsInStock : 100,
      createdOn : new Date(),
      updatedOn : null,
    },
    {
      sku : "text-101",
      name : "C# Crash Course",
      description : "Learn C# Programming Language",
      unitPrice : 900.00,
      imageUrl : "assets/images/books/text-101.jpg",
      active : true,
      unitsInStock : 100,
      createdOn : new Date(),
      updatedOn : null,
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
