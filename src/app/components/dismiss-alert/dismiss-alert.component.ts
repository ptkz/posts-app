import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dismiss-alert',
  templateUrl: './dismiss-alert.component.html'
})
export class DismissAlertComponent {
  @ViewChild('alert', { static: true }) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

}
