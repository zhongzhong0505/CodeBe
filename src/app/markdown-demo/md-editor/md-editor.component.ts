import { Component, ElementRef, Input, Output, OnInit, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import * as SimpleMDE from 'simplemde';

import * as md from 'markdown-it';
import * as mdSub from 'markdown-it-sub';
import * as mdSup from 'markdown-it-sup';
import * as mdHl from 'markdown-it-highlightjs';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private title = "";

    constructor(private el: ElementRef, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

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
            }
        };
        config = Object.assign({}, config);
        this.smd = new SimpleMDE(config);
    }

    onSave() {
        debugger;
        this.showSuccess();
        this.save.emit({
            title: this.title,
            value: this.smd.value()
        });
    }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }
}