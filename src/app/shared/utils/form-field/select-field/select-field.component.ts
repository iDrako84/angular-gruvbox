import { NgClass } from '@angular/common';
import { AfterViewInit, Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
    selector: 'gruv-select-field',
    templateUrl: './select-field.component.html',
    styleUrl: './select-field.component.scss',
    imports: [
        FormsModule,
        NgClass
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => GruvSelectFieldComponent),
            multi: true
        }
    ]
})

export class GruvSelectFieldComponent implements ControlValueAccessor, AfterViewInit {
    @Input({ required: true }) idField: string | number = '';
    @Input({ required: true }) optionsField: { [key: string]: any }[] = [];
    @Input() keyField: string = 'key';
    @Input() valueField: string = 'value';
    @Input() labelField: string = '';
    @Input() readOnlyField: boolean = false;
    @Input() messageErrorField: string = '';
    @Input() inputErrorField: boolean = false;
    protected isDisabled: boolean = false;
    protected _onChange = (value: any) => { };
    private _onTouch = () => { };
    protected value = '';
    protected ngControl: NgControl | null = null;

    constructor(private _inj: Injector) {
    }

    ngAfterViewInit(): void {
        this.ngControl = this._inj.get(NgControl);
        // console.log(this.ngControl.control?.invalid);
    }

    protected isReadOnlyField(): string {
        return this.readOnlyField ? 'pointer-events-none' : '';
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