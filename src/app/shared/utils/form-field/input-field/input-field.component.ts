import { AfterViewInit, Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
    selector: 'gruv-input-field',
    templateUrl: './input-field.component.html',
    styleUrl: './input-field.component.scss',
    imports: [
        FormsModule
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => GruvInputFieldComponent),
            multi: true
        }
    ]
})

export class GruvInputFieldComponent implements ControlValueAccessor, AfterViewInit {
    @Input({ required: true }) idField: string | number = '';
    @Input() typeField: string = 'text';
    @Input() labelField: string = '';
    @Input() placeholderField: string = '';
    @Input() readOnlyField: boolean = false;
    @Input() messageErrorField: string = '';
    @Input() inputErrorField: boolean = false;
    protected isDisabled: boolean = false;
    protected _onChange = (value: string) => { };
    private _onTouch = () => { };
    protected value = '';
    protected ngControl: NgControl | null = null;

    constructor(private _inj: Injector) {
    }

    ngAfterViewInit(): void {
        this.ngControl = this._inj.get(NgControl);
        // console.log(this.ngControl.control?.invalid);
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}