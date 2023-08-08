import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  sqlite: any;
  databaseObj!: SQLiteObject;
  tables = {
    persons:"persons",
  }
  constructor() { }

  async createDatabase(){
    await this.sqlite.create({
    name: 'data.db',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.databaseObj = db;
      // Do something with the database
    })
    .catch((e: any) => {
      alert("error on creating database" + JSON.stringify(e));
    })
  };

  async createTables(){
    await this.databaseObj.executeSql(
      'CREATE TABLE IF NOT EXISTS ${this.tables.persons} (id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL)', []
    )
  }

  async addPerson(name:string){
    // return this.databaseObj.executeSql(
    //   'INSERT INTO ${this.tables.persons} (name, category_id) VALUES {'$(name)',[]}
    // )
  }
}
