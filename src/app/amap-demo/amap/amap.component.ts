import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'amap',
    templateUrl: 'amap.component.html',
    styleUrls:['amap.component.css']
})
export class AmapComponent implements OnInit {
    constructor() { }
   
    ngOnInit() { 
        var map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 10,
            center: [113.46, 22.27]  
        });
    }
}