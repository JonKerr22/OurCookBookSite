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
  protected editableBooks: any[] = [];

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
      this.editableBooks.push({
        id: book.id,
        editable: false
      });
    });
  }

  public get newCookbookPlaceholder(): string {
    return 'Enter new cookbook name';
  }
  public bookEditable(book: Cookbook): boolean {
    return this.editableBooks.find((b) => b.id === book.id).editable;
  }
  public editToggleCookBook(book: Cookbook): void {
    const currentStatus = this.editableBooks.find((b) => b.id === book.id).editable;
    this.editableBooks.find((b) => b.id === book.id).editable = !currentStatus;
  }
  public updateCookbook(book: Cookbook): void {
    console.log(JSON.stringify(book));
    /**
     * so this should wire up to the database to update the value, but at this point
     * all the learning aspect of this that i'd need is basically done for all the layers
     * i would realistically break down each row of cookbooks into their own component
     * which i'd just use model biding to pull the name from the input box there
     * and send the new info to the backend, name and cookbook_id, and use that
     * to call a stored proc in the database something like UPDATE(Val,Col) WHERE id=id 
     * and then make the cookbook readonly again as a response type thing
     * but I think I've gotten enough stuff structured out to start moving past basic CRUD operations
     */
  }

  public onViewHomeClick(): void {
    this.restService.nothingPost();
    this.router.navigate(['home']);
  }

  public onAddNewCookbook(): void {
    this.restService.addUser1Cookbook(this.newCookBookName).subscribe((response: any) => {
      console.log(JSON.stringify(response[0]));
      const book: Cookbook = {
        id: response[0].msg[0][0], // this basically is just from digging thru response obj, will need an actual mapping for the response for this to make it easier
        user_id: 1,
        cookbook_name: this.newCookBookName
      };
      this.cookbooks.push(book);
      this.newCookBookName = '';
    });
  }

  public deleteCookBook(book: Cookbook): void {
    this.restService.deleteCookbook(book.id).subscribe((response: any) => {
      console.log(JSON.stringify(response));
      this.cookbooks.forEach((cookbook, index) => {
        if (cookbook.id === book.id) {
          this.cookbooks.splice(index, 1);
          console.log(`removed ${cookbook.cookbook_name} from database`);
        }
      });
    });
  }
}
