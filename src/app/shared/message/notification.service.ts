import { EventEmitter } from '@angular/core';

export class NotificationService {
  notifier = new EventEmitter<string>();

  notity(message: string){
    this.notifier.emit(message);
  }
}
