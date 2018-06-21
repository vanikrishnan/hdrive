import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    static datevalidate(control: AbstractControl): ValidationErrors | null {
        const date = control.value as string;
        console.log(date);
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1; // since January is 0!
        const yyyy = today.getFullYear();
        const todaydate = parseInt(date.split('-')[2]);
        const todaymonth = parseInt(date.split('-')[1]);
        const thisyear = parseInt(date.split('-')[0]);
        if ( thisyear >= yyyy ) {
            if ( todaymonth >= mm && todaydate >= dd) {
                    return null;
            }
        } else {
           return {
            'datevalidate' :  true
           };
       }
    }
}
