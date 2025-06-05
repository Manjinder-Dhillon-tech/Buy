import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
  standalone: false,
})
export class SupportPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  messages = [
    { text: 'Hello! How can I help you?', time: '10:00 AM', own: false },
  ];
  newMessage: string = '';

  private keyboardWillShowSub?: Subscription;
  private keyboardWillHideSub?: Subscription;

  constructor(private keyboard: Keyboard) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Subscribe to keyboard events
    this.keyboardWillShowSub = this.keyboard
      .onKeyboardWillShow()
      .subscribe(() => {
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      });

    this.keyboardWillHideSub = this.keyboard
      .onKeyboardWillHide()
      .subscribe(() => {
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      });
  }

  ngOnDestroy() {
    if (this.keyboardWillShowSub) {
      this.keyboardWillShowSub.unsubscribe();
    }
    if (this.keyboardWillHideSub) {
      this.keyboardWillHideSub.unsubscribe();
    }
  }

  sendMessage() {
    const text = this.newMessage.trim();
    if (text) {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.messages.push({ text, time, own: true });
      this.newMessage = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }

  private scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(300);
    }
  }
}
