/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  first = "Sunday",
  second = "Monday",
  third = "Tuesday",
  fourth = "Wednesday",
  fifth = "Thursday",
  sixth = "Friday",
  seventh = "Saturday",
}
function isWeekend(day): boolean {
  if (day === "Saturday" || day === "Sunday") {
    return true;
  }
  return false;
}
isWeekend(Day.fifth);
