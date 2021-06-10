import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-cookbooks',
  templateUrl: './all-cookbooks.component.html',
  styleUrls: ['./all-cookbooks.component.css']
})
export class AllCookbooksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public get newCookbookPlaceholder(): string {
    return 'Enter new cookbook name';
  }

  public onViewHomeClick(): void {
    this.router.navigate(['home']);
  }

  public onAddNewCookbook(): void {
    // TODO - make api call and pass info from textarea in
  }
}
