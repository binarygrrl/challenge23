# cNote Coding Challenge for Amber Dunn

## Included Files: 
#### /designs/cNote_ERD.pdf - ERD Drawing for BalanceHistory table and directly related entities
#### /designs/cNote_ArchitectureDiagram.pdf - Architecture Design for simple system including User Portal, Admin Portal (VPN), Centralized API, and Database
#### /prisma/schema.prisma - Prisma schema for the BalanceHistory table
#### /src/calcInterestAcc.js - Accrued Interest Calculation Method
#### /src/index.js - Express API 
#### /src/tests.js - Custom tests for Accrued Interest Calculation Method
#### /src/testDataSample.js - Data Sample for Test Cases
#### /prismaClient.ts - Seeds the database and displays entries

## Run Dev
#### Clone Repo
#### cd into challenge
#### Run 'npm install'
#### To create the database run 'npx prisma migrate dev --name init'
#### To seed the database run 'npx ts-node prismaClient.ts'
#### To run the server run 'npm run start'
#### To see Prisma Studio run 'npx prisma studio'


## API Calls
#### Get all records for balance history
#### GET http://localhost:3000/getAllBalances

#### Get all balance history for userId
#### GET http://localhost:3000/getBalanceListByUser/1

#### Get last balance listed for userId
#### GET http://localhost:3000/getCurrentBalanceByUser/1

#### Get monthly interest accrued for userId
#### GET http://localhost:3000/getMonthlyInterestAccrued/1


## cURL Calls
#### Get all balance records for all users
#### curl http://localhost:3000/getAllBalances

#### Get balance list for userId
#### curl http://localhost:3000/getBalanceListByUser/1

#### Get current balance for userId
#### curl http://localhost:3000/getCurrentBalanceByUser/1

#### Get monthly interest accrued for userId
#### curl http://localhost:3000/getMonthlyInterestAccrued/1

## Tests
#### Use the following command to run the tests on the interestAccrued method from /src/
#### node ./src/tests.js


## Notes
#### Originally planned to use a date library but the built in date manipulation methods were sufficient for this challenge.
#### Tried to use Prisma createMany feature to seed the database but I kept getting the error that it doesn't exist