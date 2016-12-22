//@flow

 class TodoDate {

  dateObject: Date;
  locale: string;

  date: number;
  day: string;
  month: string;
  year: number;

  constructor() {
    this.dateObject = new Date();
    this.locale = "en-us";
    // create a calendar in here.
    this.date = this.dateObject.getDate();
    this.day = this.dateObject.toLocaleString(this.locale, {weekday: "long"});
    this.month = this.dateObject.toLocaleString(this.locale, {month: "long"});
    this.year = this.dateObject.getFullYear();
  }
}  


const todoDate = new TodoDate;
export default todoDate;
