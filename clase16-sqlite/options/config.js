import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const optionsSQLite3 = {
    db: {
        client: 'better-sqlite3', // or 'better-sqlite3'
        connection: {
            filename: path.join(__dirname, '../db/ecommerce.db3')
        },
        useNullAsDefault: true
    }
}




