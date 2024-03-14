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
    // Find the index of "plus" in the query
    const plusIndex = query.toLowerCase().indexOf("plus");

    // Extract the numbers before and after "plus"
    const num1 = parseInt(query.slice(8, plusIndex).trim(), 10);
    const num2 = parseInt(query.slice(plusIndex + 4).trim(), 10);

    // Calculate the sum
    const sum = num1 + num2;

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
