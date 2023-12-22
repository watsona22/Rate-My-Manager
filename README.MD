# rate-my-manager
## Getting Started
0. npm install boss
```
npm i
```
1. Login to Mysql and Apply the Schema
```bash
mysql -h 127.0.0.1 -u root -p
source db/schema.sql
exit
```
2. Run the seeder scripts
```
npm run seed
```
3. Rename .env
```
cp .env.EXAMPLE .env
```
3.1 Add dev creds for Mysql
4. Start the server
```
npm start
```

