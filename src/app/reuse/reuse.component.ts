import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent implements OnInit {
    info = {
        title: "Rating",
        isFavorite: true
    };
  constructor() { }

  ngOnInit(): void {
  }

}
