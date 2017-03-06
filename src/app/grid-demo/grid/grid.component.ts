import { Component, OnInit,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: 'grid.component.html'
})
export class GridComponent implements OnInit {
    @Input() columns: any[];
    @Input() rows: any[];
    constructor() { }

    ngOnInit() { 

    }

}