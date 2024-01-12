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

## Description

The purpose of this project was to build an interactive web application. Rate My Manager provides options to browse and compose ratings for managers by business location. The dynamic components of our website are supported by JavaScript. The application uses Express.js backend to retrieve rating and manager data. We also used mysql and Sequelize to query the database and render data based on user requests.  Finally, we incorporated a working API, CSS framework, and Handlebars.js packages to improve browsability as well as the overall look and feel of the site.

Our acceptance criteria were as follows: 

GIVEN that a user wants to find manager ratings,
THEN he selects a business by location chooses a manager and those reviews are displayed.
GIVEN that a user wants to rate a manager,
THEN the user is prompted to login,
WHEN the user is authenticated he will be prompted with an option to rate the current manager.
WHEN the user completes the rating, he will have the option to review the entry, return to the main page, or logout. 


All criteria were met and the site functions as expected. 

## Usage

Rate My Manager can be used to find and rate managers - both good and bad - to create a crowdsourced resource for current and prospective employees who want to know what to expect on the job.  And of course, you can post anonymously, as needed.

<ul>
<li>Find managers based on your preferred location.</li>
<li>Rate current and past supervisors.</li> 
<li>Contribute to a community of transparency so you know what to expect from your supervisor.</li>
</ul>

The following links to our deployed application:
    https://rate-my-manager-97f9044f8b00.herokuapp.com/

## Contributors

<ul>
<li>Donnie Noe - https://github.com/Donnie1129</li>
<li>Reese Roccaforte - https://github.com/RoccaforteR</li>
<li>Mark Bishop - https://github.com/MarkRBishop</li>
<li>Amber Watson - https://github.com/watsona22</li>
</ul>

## Credits

The following resources were referenced in the development of this site:

<ul>
<li>CSS Framework - Tailwind - https://tailwindcss.com/</li>
<li>NPM Package - Axios - https://www.npmjs.com/package/axios</li>
<li>API -  - </li>
</ul>

## License

MIT License
Copyright (c) [2023] [Donnie Noe, Reese Roccaforte, Mark Bishop, Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

