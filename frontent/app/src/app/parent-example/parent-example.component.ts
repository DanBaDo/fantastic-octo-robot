import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/Users';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.css']
})
export class ParentExampleComponent implements OnInit {

  users: User[] = []

  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.api.getUsers()
    console.log(this.users)
  }

}
