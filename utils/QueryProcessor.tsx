export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "aecai"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "acai"
    );
  }
  if (query.toLowerCase().includes("plus")) {
    // Regular expression to match numbers
    const numberRegex = /\d+/g;
    
    // Extract all numbers from the query
    const numbers = query.match(numberRegex);

    // Convert the extracted numbers to an array of integers
    const parsedNumbers = numbers.map(num => parseInt(num, 10));

    // Calculate the sum of the numbers
    const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);

    return sum.toString();
  }

  if (query.toLowerCase().includes("largest")) {
    // Extract the numbers from the query
    const numbers = query.match(/\d+/g);

    // Find the largest number
    const largest = Math.max(...numbers.map(Number));

    // Return the largest number
    return largest.toString();
  }

  return "";
}
