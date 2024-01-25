import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { PopUpService } from './services/pop-up.service';
import { MessagePopUpComponent } from './components/message-pop-up/message-pop-up.component';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private popupservice: PopUpService, private zone: NgZone) { }

    handleError(error: any) {

        let message = error?.message || 'Undefined client error'
        if (error?.status === 502) {
            message = "Backend Server ist nicht erreichbar"
        }
        if (!(error instanceof HttpErrorResponse)) {
            error = <HttpErrorResponse>error.rejection; // get the error object
        }

        let popup = <MessagePopUpComponent>this.popupservice.getPopup("show_message");

        this.zone.run(() =>
            popup.open(message)
        )

        console.error('Error from global error handler', error);
    }
}
