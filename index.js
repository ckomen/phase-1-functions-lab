// Code your solution in this file!
// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Scuber's headquarters is at block 42
    return Math.abs(someValue - hq); // Calculate the absolute distance in blocks
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get the distance in blocks
    return blocks * 264; // Convert blocks to feet (1 block = 264 feet)
  }
  
  // Calculates the number of feet a passenger travels given a starting block and an ending block.
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start); // Calculate the absolute distance in blocks
    return distanceInBlocks * 264; // Convert blocks to feet
  }
  
  // Given the starting and ending block, return the fare for the customer.
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination); // Get the distance in feet
  
    if (distanceInFeet <= 400) {
      return 0; // The first 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // No rides allowed over 2500 feet
    }
  }
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  