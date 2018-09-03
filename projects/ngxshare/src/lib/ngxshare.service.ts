import { Injectable } from '@angular/core';
import {item} from './item.model';
@Injectable({
  providedIn: 'root'
})
export class NgxshareService {
  protected data_list: Array<item>;
  constructor() { }


  /**
   * @description add new item to the data list 
   */
  public setItem( name:string,vaule:string) {
      var item= this.createItem(name,vaule);
      this.data_list.push(item);
      console.log('list',this.data_list);   
  }

  /**
   * @description get a data item from data list 
   */
  public getItem(name){
    return this.data_list.filter(item=>item.name=name);
  }
  /**
   * @description create item object with the data 
   */
  private createItem(name,value) {
    var new_item= new item;
    new_item.name= name;
    new_item.value=value;
    new_item.UpdatedAt= Date.now();
   return new_item;
    
  }
}
