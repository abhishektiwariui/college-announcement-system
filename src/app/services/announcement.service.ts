import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private key = 'announcements';

  constructor(private readonly authService: AuthService) {}

  getAll(): Announcement[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  add(announcement: Announcement) {
    const all = this.getAll();
    announcement.id = Date.now();
    announcement.timestamp = new Date().toISOString();
    all.push(announcement);
    localStorage.setItem(this.key, JSON.stringify(all));
  }

  delete(id: number) {
    const all = this.getAll().filter((a) => a.id !== id);
    localStorage.setItem(this.key, JSON.stringify(all));
  }

  logout() {
    this.authService.logout();
  }
}
