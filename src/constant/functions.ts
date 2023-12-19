export const calculateTimeDifference = (arrival: any, departure: any) => {
  const arrivalTime = new Date(arrival).getTime();
  const departureTime = new Date(departure).getTime();
  const timeDiff = Math.abs(departureTime - arrivalTime);

  const hours = Math.floor(timeDiff / 3600000); // 1 hour = 3600000 milliseconds
  const minutes = Math.floor((timeDiff % 3600000) / 60000); // 1 minute = 60000 milliseconds

  return { hours, minutes };
};

// Example Usage
// const arrivalTime = "2023-10-15T08:00:00";
// const departureTime = "2023-10-15T14:30:00";

// const timeDifference = calculateTimeDifference(arrivalTime, departureTime);
// console.log(
//   `Total time difference: ${timeDifference.hours} hours and ${timeDifference.minutes} minutes`
// );
