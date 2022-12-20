# ORM E-Commerce Backend [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    
    
## Description
    
This is the repo for the E-commerce back end project. After copying the repo npm i will install the necessary dependencies. After that openening the databse in mysql and seeding data in the terminal will allow the user to access the information. After seedings the data one can open their browser or insomnia to access and edit the data. The user can then use the link below to get data from the products, tags and category groups with a get request. They can also edit various aspects of those groups through a put request. Lastly the user can delete data from each section as desired. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
To install necessary depnedencies, run the follow commands:

```
git clone git@github.com:Nevin-Lewis/E-commerce_Back_End_Challenge.git
```
Then run

```
npm i
```
Then add a .env file with the following parameter DB_PASSWORD ='INSERT PASSWORD HERE'
## Usage

To start this program run

```
mysql -u root -p
```
Enter your password as prompted then run

```
source db/schema.sql
quit
```
Then run the following code in the terminal

```
npm run seed
```

```
npm start
```
Open insomnia to get, put and delete data from the data base using http://localhost:3001/api/
## License

<details>

<summary> MIT License </summary>

MIT License

    Copyright (c) 2022 Nevin Lewis
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

## Contributing
Feel free to copy, or fork this repo. Make any changes that you would like and use it freely. 

## Test
To run tess, run the following command:

```
N/A
```

[Walkthrough_video.webm](https://user-images.githubusercontent.com/64855834/208587424-6141f60f-5c49-41e6-a3d7-621d5f8aebcb.webm)


## Questions
If you have any quetsions about the repo, open an issue or contact me directly at github.com/nevin-lewis
