class DinnerModel {
  constructor(guests = 2) {
    this.setNumberOfGuests(guests);
  }
  setNumberOfGuests(x) {
    if (x <= 0 || !Number.isInteger(x)) {
      throw Error("Number of guests has to be a positive non-zero Integer.");
    } else {
      this.numberOfGuests = x;
    }
  }
}
