import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {
  @ViewChild('myButton', { static: false }) myButton!: ElementRef;
  @ViewChild('myRadio', { static: false }) myRadio!: ElementRef;


  constructor() { }

  ngOnInit() {
  }
  focusButton() {
    this.myButton.nativeElement.focus();
  }

  focusRadio() {
    this.myRadio.nativeElement.querySelector('input')?.focus();
  }

}
