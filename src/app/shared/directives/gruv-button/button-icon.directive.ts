import { Directive, HostBinding, Input } from '@angular/core';

@Directive({ 
    standalone: false,
    selector: '[gruv-button-icon]'
 })
export class GruvButtonIconDirective {
    @Input() color: 'primary' | 'danger' = 'primary';
    @HostBinding('class') private get classes() {
        if (this.color === 'primary') {
            return 'flex justify-center bg-gruv-light-green p-1 enabled:hover:opacity-90 enabled:focus:opacity-90 dark:bg-gruv-dark-green text-gray-200 dark:text-gruv-dark-fg rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 [.disabled]:pointer-events-none [.disabled]:select-none [.disabled]:opacity-60'
        }
        if (this.color === 'danger') {
            return 'flex justify-center bg-gruv-light-red p-1 enabled:hover:opacity-90 enabled:focus:opacity-90 dark:bg-gruv-dark-red text-gray-200 dark:text-gruv-dark-fg rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 [.disabled]:pointer-events-none [.disabled]:select-none [.disabled]:opacity-60'
        }
        return '';
    }
}