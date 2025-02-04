import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (req, res, next) => {
    const userId = req.header('user-id');
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    const user = db.users.find(user => user.id == userId);
    if (!user) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
};
