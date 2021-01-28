import * as path from 'path';
import { createConnection, Connection } from 'typeorm';

class Database {
    
    private connection: Connection;

    constructor() {}
    
    public async createConnection() {
        this.connection = await createConnection({
            type: 'sqlite',
            entities: ["src/models/*.ts"],
            database: this.getDatabasePath()
        });
    
        console.log('Sqlite Database Connected!');
    
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

