import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookbook } from 'src/app/Models/cookbook';

@Component({
  selector: 'app-all-cookbooks',
  templateUrl: './all-cookbooks.component.html',
  styleUrls: ['./all-cookbooks.component.css']
})
export class AllCookbooksComponent implements OnInit {

  public cookbooks: Cookbook[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {cookbooks: any}) => {
      this.cookbooks = data.cookbooks;
      //console.log(JSON.stringify(this.cookbooks));
    });
  }

  public get newCookbookPlaceholder(): string {
    return 'Enter new cookbook name';
  }
  public get cookBookNamesList(): string[] {
    const strngCheck: string[] = [];
    this.cookbooks.forEach(function(val){
      console.log(val);
      strngCheck.push(val.cookbook_name);
    });
    //console.log(strngCheck.length);
    //strngCheck.forEach(s => console.log(s));
    return this.cookbooks.map(b => b.cookbook_name);
  }

  public onViewHomeClick(): void {
    this.router.navigate(['home']);
  }

  public onAddNewCookbook(): void {
    // TODO - make api call and pass info from textarea in
  }
}
