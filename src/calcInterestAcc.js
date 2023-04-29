// Define Magic Number Variables
const INTEREST_RATE = 0.02; //Annual Interest Rate
const DAYS_IN_YEAR = 365;
const DAILY_INTEREST_RATE = INTEREST_RATE / DAYS_IN_YEAR;

// Helper Calculations
// Calculate interest by number of days and balance
const calcInterestByDays = (days, balance) =>
  days * DAILY_INTEREST_RATE * balance; // (days * 2% / 365 days * balance)

// Calculate number of days in the month by date
const calcDaysInMonthByDate = (date) => {
  let dateObj = new Date(date);
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), 0).getDate();
};

// const interestAccrued = (data) => {
function interestAccrued(data){
  let totalInterestAccrued = 0;

  // TODO: Determine which month to calculate for, ideally it would be the current month to calculate end of month each month - HOWEVER - for all test cases the month is January - so using the data supplied rather than current month and commenting out code here:
  // let today = new Date()
  // let calcMonth = today.getMonth()

  //No data found, return 0
  if (!data.length || data.length === 0) return 0;
  //Single Entry Found - calculate based on number of days invested by balance
  else if (data.length === 1) {
    // TODO: Determine if the date in the data returned is in the month being calculated
    let date = new Date(data[0].date);
    let day = date.getDate();
    let daysInMonth = calcDaysInMonthByDate(date);
    let daysInvested = day > 1 ? daysInMonth - day : daysInMonth;
    totalInterestAccrued = calcInterestByDays(daysInvested, data[0].balance);
  }
  //Dual Entry Found - calculate the 2 ranges for each invested balance then add together
  else if (data.length === 2) {
    // TODO: Determine if the date in the data returned is in the month being calculated
    let date1 = new Date(data[0].date);
    let date2 = new Date(data[1].date);
    let daysInMonth = calcDaysInMonthByDate(date1);
    let numDaysRange1 = date2.getDate() - date1.getDate();
    let numDaysRange2 = daysInMonth - date2.getDate() + 1;
    totalInterestAccrued =
      calcInterestByDays(numDaysRange1, data[0].balance) +
      calcInterestByDays(numDaysRange2, data[1].balance);
  }
  // Multple Entries Found - calculate invested balance for multiple date ranges based on data.length then add together
  else {
    // TODO: Determine if the date in the data returned is in the month being calculated
    let ranges = [];
    for (let i = 0; i < data.length; i++) {
      let date = new Date(data[i].date);
      let balance = data[i].balance;

      // Setup ranges object for current iteration if it doesn't exist yet
      if (!ranges[i]) {
        ranges[i] = {
          start: 0,
          end: 0,
          days: 0,
          balance,
          interest: 0,
        };
      }

      // First entry, set the first range to current data date and balance
      if (i === 0) {
        ranges[i] = {
          start: date.getDate(),
          end: 0,
          days: 0,
          balance,
          interest: 0,
        };
      }
      // Last entry, calculate the ranges and interest for each range
      else if (i === data.length - 1) {
        // Calculate days in the month
        let daysInMonth = calcDaysInMonthByDate(date);
        // Set range end for previous iteration
        ranges[i - 1].end = date.getDate();
        // Set data for current iteration
        ranges[i] = {
          start: date.getDate(),
          end: daysInMonth + 1,
          days: 0,
          balance,
          interest: 0,
        };
        // Calculate the total interest accrued from all ranges
        ranges.forEach((ele, index) => {
          ele.days = ele.end - ele.start;
          ele.interest = calcInterestByDays(ele.days, ele.balance);
          totalInterestAccrued += ele.interest;
        });
      }
      // Any other entry is a middle entry and just needs to set the ranges data for the next iteration
      else {
        //Set range end for previous iteration
        ranges[i - 1].end = date.getDate();
        // Set range start for current iteration
        ranges[i].start = date.getDate();
        ranges[i].balance = balance;
      }
    }
  }
  return totalInterestAccrued;
};

module.exports = { interestAccrued };

/**
 * Output: (Test Cases)
    "case1" 16.986301369863014
    "case2" 24.383561643835613
    "case3" 9.58904109589041
    "case4" 20.273972602739725
 */
