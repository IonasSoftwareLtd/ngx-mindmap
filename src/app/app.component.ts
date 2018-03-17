import { Component } from '@angular/core';
import { MindMapService } from './services/mind-map/mind-map.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    
    constructor(private svcMindMap: MindMapService) {

    }
}
