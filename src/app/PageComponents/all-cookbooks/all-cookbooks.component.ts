import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookbook } from 'src/app/Models/cookbook';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-all-cookbooks',
  templateUrl: './all-cookbooks.component.html',
  styleUrls: ['./all-cookbooks.component.css']
})
export class AllCookbooksComponent implements OnInit {

  public cookbooks: Cookbook[] = [];
  protected dataArr: any[];

  public newCookBookName: string;

  public constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private restService: RestService) { 
      
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

  public onViewHomeClick(): void {
    this.router.navigate(['home']);
  }

  public onAddNewCookbook(): void {
    this.restService.addUser1Cookbook(this.newCookBookName).subscribe((response: any) => {
      console.log(JSON.stringify(response));
      this.newCookBookName = '';
    });
  }

  public deleteCookBook(book: Cookbook): void {
    console.log(JSON.stringify(book));
  }
}
