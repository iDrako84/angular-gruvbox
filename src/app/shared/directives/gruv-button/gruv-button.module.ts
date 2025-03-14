import { NgModule } from '@angular/core';
import { GruvButtonDirective } from './button.directive';
import { GruvButtonIconDirective } from './button-icon.directive';

const directives = [
    GruvButtonDirective,
    GruvButtonIconDirective,
];

@NgModule({
    imports: [],
    exports: [
        ...directives
    ],
    declarations: [
        ...directives
    ],
    providers: [],
})
export class GruvButtonModule { }
