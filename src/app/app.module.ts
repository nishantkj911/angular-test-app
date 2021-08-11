import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorsComponent} from './authors/authors.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import {SummaryPipePipe} from './summary-pipe.pipe';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthorsComponent,
        DataDisplayComponent,
        SummaryPipePipe,
        FavoriteIconComponent
    ],
    imports: [
        BrowserModule, // built-in module. stuff which Browser application needs.
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
