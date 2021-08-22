import { Component, OnInit } from '@angular/core';
import {FavoriteChangeEvent} from "../favorite-icon/favorite-icon.component";

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent{
    /*info = {
        title: "Rating",
        isFavorite: true
    };
  constructor() { }

  ngOnInit(): void {
  }

  onFavChanged(eventArgs: FavoriteChangeEvent) {
      eventArgs.favorite ? console.log("I am Favorite!!"):null;
  }*/
    likes: number = 0;

    constructor() { // usually the likes will be downloaded from server by a svc
        this.likes = 10
    }

    onUpvote($event: {likes:number}) {
        this.likes = $event.likes
    }

    onDownvote($event: {likes:number}) {
        this.likes = $event.likes
    }

    onReset($event: {likes:number}) {
        this.likes = $event.likes
    }


}
