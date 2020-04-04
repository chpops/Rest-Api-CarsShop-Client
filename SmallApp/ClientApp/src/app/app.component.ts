import { Component } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.css"],
    providers: [DatePipe],
})

export class AppComponent {
    justDate = new Date();
    footerYear = formatDate(this.justDate, 'yyyy', 'en');
}