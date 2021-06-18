import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookbook } from 'src/app/Models/cookbook';

@Component({
  selector: 'app-all-cookbooks',
  templateUrl: './all-cookbooks.component.html',
  styleUrls: ['./all-cookbooks.component.css']
})
export class AllCookbooksComponent implements OnInit {

  protected cookbooks: Cookbook[] = [];
  protected dataArr: any[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.dataArr = this.activatedRoute.snapshot.data.cookbooks;
    console.log(`cookbooks init! num found: ${this.dataArr.length}`);
    this.dataArr.forEach((val) => { // TODO - see if its more straightforward to map results to objects
      const book: Cookbook = {
        id: val[0],
        user_id: val[1],
        cookbook_name: val[2]
      };
      this.cookbooks.push(book);
    });
  }

  public get newCookbookPlaceholder(): string {
    return 'Enter new cookbook name';
  }
  public get cookBookNamesList(): string[] {
    const strngCheck: string[] = [];
    this.cookbooks.forEach((book) => {
      strngCheck.push(book.cookbook_name);
    });

    return strngCheck;
  }

  public onViewHomeClick(): void {
    this.router.navigate(['home']);
  }

  public onAddNewCookbook(): void {
    // TODO - make api call and pass info from textarea in
  }
}
