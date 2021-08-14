import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-favorite-icon',
    templateUrl: './favorite-icon.component.html',
    styleUrls: ['./favorite-icon.component.css'],
    inputs: ['textContent'], // only works if there is a field with the same name. Plus, refactoring doesnt work

})
export class FavoriteIconComponent {
    @Input() isFavorite: boolean = false;
    textContent: string = "";

    // @Input() info = { textContent, isFavorite: boolean};

    changeFill() { // Use this if additional logic required.
        this.isFavorite = !this.isFavorite;
    }
}
