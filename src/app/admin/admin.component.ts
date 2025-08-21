import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../models/announcement.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: false,
})
export class AdminComponent {
  title = '';
  description = '';
  announcements: Announcement[];

  constructor(
    private readonly service: AnnouncementService,
    private readonly authService: AuthService
  ) {
    this.announcements = this.service.getAll();
  }

  addAnnouncement() {
    if (this.title && this.description) {
      this.service.add({
        id: 0,
        title: this.title,
        description: this.description,
        timestamp: '',
      });
      this.title = '';
      this.description = '';
      this.announcements = this.service.getAll();
    }
  }

  deleteAnnouncement(id: number) {
    this.service.delete(id);
    this.announcements = this.service.getAll();
  }

  logOut() {
    this.authService.logout();
  }
}
