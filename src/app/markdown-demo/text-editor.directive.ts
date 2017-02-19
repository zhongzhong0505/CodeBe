import { Directive, ElementRef, Input,Output, OnInit,EventEmitter } from '@angular/core';
import * as SimpleMDE from 'simplemde';

import * as md from 'markdown-it';
import * as mdSub from 'markdown-it-sub';
import * as mdSup from 'markdown-it-sup';
import * as mdHl from 'markdown-it-highlightjs';

@Directive({
    selector: '[textEditor]'
})
export class TextEditorDirective implements OnInit {
    private smd;
    private renderer = md();
    @Output() handler = new EventEmitter(); 

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        this.renderer
        .use(mdSub)
        .use(mdSup)
        .use(mdHl);  

        this.smd = new SimpleMDE({
            element:this.el.nativeElement,
            previewRender:()=>{
                return this.renderer.render(this.smd.value());
            }
        });
    }

    value(){
        this.handler.emit(this.smd.value());
    }
}