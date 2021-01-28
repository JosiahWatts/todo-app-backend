import * as path from 'path';
import { createConnection, Connection } from 'typeorm';

class Database {
    
    public static async createConnection() {
        const connection = await createConnection({
            type: 'sqlite',
            database: this.getDatabasePath()
        });
    
        console.log('Sqlite Database Connected!');
    
        return connection;
    }

    public static getDatabasePath() {
        return path.resolve(__dirname, 'db/database.sqlite');
    }
}

export default Database;

