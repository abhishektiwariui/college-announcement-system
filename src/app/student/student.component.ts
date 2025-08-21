import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../models/announcement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: false,
})
export class StudentComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(
    private readonly service: AnnouncementService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.announcements = this.service.getAll();
  }

  returnToWelcome() {
    this.router.navigate(['']);
  }
}
