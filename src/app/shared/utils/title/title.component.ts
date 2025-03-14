import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'gruv-title',
    templateUrl: 'title.component.html',
    styleUrl: './title.component.scss'
})

export class GruvTitleComponent {
    @HostBinding('class') private readonly classes = 'flex text-4xl mb-4 underline';
}