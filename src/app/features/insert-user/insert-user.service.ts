import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class InsertUserService {

    public createForm(): { form: FormGroup, errorForm: { [key: string]: boolean } } {
        const form = new FormGroup({
            firstName: new FormControl('', { validators: [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)] }),
            lastName: new FormControl('', { validators: [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)] }),
            age: new FormControl(null, { validators: [Validators.required, Validators.min(18), Validators.max(150)] }),
            role: new FormControl(null, { validators: [Validators.required] }),
        });
        let errorForm: { [key: string]: boolean } = {};
        Object.keys(form.controls).forEach((key: string) => errorForm[key] = false);
        return {
            form,
            errorForm
        };
    }

    public controlForm(form: FormGroup, errorForm: { [key: string]: boolean }) {
        Object.keys(errorForm).forEach((key: string) => errorForm[key] = false);
        if (form.invalid) {
            Object.keys(form.controls).forEach((key: string) => errorForm[key] = form.controls[key].invalid);
        }
        return { valid: !form.invalid, errorForm: errorForm };
    }
}