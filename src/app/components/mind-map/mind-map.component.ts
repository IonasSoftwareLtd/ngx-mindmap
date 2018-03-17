import { Component, OnInit } from '@angular/core';
import { MindMapService } from '../../services/mind-map/mind-map.service';

@Component({
    selector: 'mind-map',
    template: `
    <div class="mind-map">
        <div id="container">
            <div id="center-container">
                <div id="infovis">
                </div>
            </div>
        </div>
    <div>`
    , styleUrls: [ 'mind-map.component.css' ]
})
export class MindMapComponent implements OnInit {

    constructor(private svcMindMap: MindMapService) { }

    ngOnInit() {
        this.svcMindMap.create();
    }
}