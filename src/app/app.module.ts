
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MindMapService } from './services/mind-map/mind-map.service';
import { MindMapComponent } from './components/mind-map/mind-map.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        AppComponent
        , MindMapComponent
    ]
    , imports: [
        BrowserModule
        , FormsModule
        , HttpModule
    ]
    , providers: [
        MindMapService
    ]
    , bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
