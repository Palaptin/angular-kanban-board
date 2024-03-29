import { Injectable } from '@angular/core';
import { PopUp } from '../interfaces/pop-up';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  private modals: PopUp[] = [];

  add(modal: PopUp) {
    // ensure component has a unique id attribute
    if (!modal.id || this.modals.find(x => x.id === modal.id)) {
      throw new Error('modal must have a unique id attribute');
    }

    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(modal: PopUp) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x === modal);
  }

  open(id: string, callback_function: Function) {
    const modal = this.modals.find(x => x.id === id);

    if (!modal) {
      throw new Error(`modal '${id}' not found`);
    }

    modal.open(callback_function);
  }

  getPopup(id: string): PopUp {
    const pop_up = this.modals.find(x => x.id === id);

    if (!pop_up) {
      throw new Error(`modal '${id}' not found`);
    }
    return pop_up

  }

  close() {
    // close the modal that is currently open
    const modal = this.modals.find(x => x.isOpen);
    modal?.closePopUp();

  }

}
