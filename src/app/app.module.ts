import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorsComponent} from './authors/authors.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import {SummaryPipePipe} from './summary-pipe.pipe';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipePipe } from './title-case-pipe.pipe';
import { ReuseComponent } from './reuse/reuse.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthorsComponent,
        DataDisplayComponent,
        SummaryPipePipe,
        FavoriteIconComponent,
        TitleCaseComponent,
        TitleCasePipePipe,
        ReuseComponent,
        LikeComponent,
        DirectivesComponent
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
