import * as path from 'path';
import { createConnection, Connection } from 'typeorm';

class Database {
    
    private connection: Connection;

    constructor() {}
    
    public async createConnection() {
        // set synchronize to true in order to create
        // the tables on application load.
        this.connection = await createConnection({
            type: 'sqlite',
            synchronize: false,
            entities: ["src/models/*.ts"],
            database: this.getDatabasePath()
        });
    
        console.log('Hey! Looks like we have a database');
    
        return this.connection;
    }

    public getConnection() {
        return this.connection;
    }

    public getDatabasePath() {
        return path.resolve(__dirname, 'db/database.sqlite');
    }
}

export default Database;

