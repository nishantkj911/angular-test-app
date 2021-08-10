import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  private readonly __authors = ["Jeffrey Archer", "J. K. Rowling", "Mark Swanson", "Stan Lee"]

  constructor() {
      // this.__authors = ["Jeffrey Archer", "J. K. Rowling", "Mark Swanson"]
  }

  get authors() {
    return this.__authors
  }
}

