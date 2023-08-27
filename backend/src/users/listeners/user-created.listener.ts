import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { UserCreatedEvent } from '../events/user-created.event';
import { Events } from '../enum';
import { NotificationService } from 'src/notification/notification.service';
import { UsersService } from '../users.service';

@Injectable()
export class UserCreatedListener {
  constructor(
    private authService: UsersService,
    private readonly notificationService: NotificationService,
  ) {}

  @OnEvent(Events.CreateUser)
  async handleUserCreatedEvent(event: UserCreatedEvent) {
    const user = await this.authService.createAccountVerificationToken(
      event.email,
    );
    this.notificationService.sendVerificationMail(user);
  }
}
