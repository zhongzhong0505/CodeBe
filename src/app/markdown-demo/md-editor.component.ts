import { Component, ElementRef, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import * as SimpleMDE from 'simplemde';

import * as md from 'markdown-it';
import * as mdSub from 'markdown-it-sub';
import * as mdSup from 'markdown-it-sup';
import * as mdHl from 'markdown-it-highlightjs';

@Component({
    selector: 'md-editor',
    template: `
        <div class="title-input">
            <div class="input-group">
              <input class="form-control" [(ngModel)]="title" name="title" placeholder="标题" required>
              <span class="input-group-btn">
                <button class="btn btn-info" (click)="onSave()"><i class="glyphicon glyphicon-saved"></i> 保存</button>
              </span>
            </div>
        </div>
        <textarea #simplemde></textarea>
    `,
    styles:[`
        .title-input {
            margin-bottom:10px;
        }
    `]
})
export class MdEditorComponent implements OnInit {
    @ViewChild('simplemde') textarea: ElementRef
    private smd;
    private renderer = md();
    @Input() options = {};
    @Output() save = new EventEmitter();
    private title = "";

    constructor(private el: ElementRef) { }

    public ngOnInit(): void {
        this.renderer
            .use(mdSub)
            .use(mdSup)
            .use(mdHl);

        let config = {
            element: this.textarea.nativeElement,
            showIcons: ["code", "table", "horizontal-rule", "clean-block", "strikethrough", "heading-smaller"
                , "heading-bigger", "heading-1", "heading-2", "heading-3"],
            spellChecker: false,
            previewRender: () => {
                return this.renderer.render(this.smd.value());
            }
        };
        config = Object.assign(config, this.options);
        this.smd = new SimpleMDE(config);
    }

    onSave() {
        this.save.emit({
            title:this.title,
            value:this.smd.value()
        });
    }
}