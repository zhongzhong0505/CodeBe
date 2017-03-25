import { Component, ElementRef, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import * as SimpleMDE from 'simplemde';

import * as md from 'markdown-it';
import * as mdSub from 'markdown-it-sub';
import * as mdSup from 'markdown-it-sup';
import * as mdHl from 'markdown-it-highlightjs';

@Component({
    selector: 'md-editor',
    templateUrl: './md-editor.component.html',
    styleUrls: ['./md-editor.component.css']
})
export class MdEditorComponent implements OnInit {
    @ViewChild('simplemde') textarea: ElementRef
    private smd;
    private renderer = md();
    @Output() save = new EventEmitter<{ [key: string]: any }>();
    public title = "";

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        this.renderer
            .use(mdSub)
            .use(mdSup)
            .use(mdHl);

        let config = {
            element: this.textarea.nativeElement,
            showIcons: ["code", "table", "horizontal-rule", "strikethrough", "heading-smaller"
                , "heading-bigger", "heading-1", "heading-2", "heading-3"],
            spellChecker: false,
            previewRender: () => {
                return this.renderer.render(this.smd.value());
            },
            autoDownloadFontAwesome:false //不自动下载font-awesome样式，在index中已经加入了
        };
        config = Object.assign({}, config);
        this.smd = new SimpleMDE(config);
    }

    onSave() {
        this.save.emit({
            title: this.title,
            value: this.smd.value()
        });
    }
}