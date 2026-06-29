import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'

const sqlite = drizzle(new (require('better-sqlite3')('file:./dev.db')), { schema })
export { schema }
export default sqlite
