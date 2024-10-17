// function counts the flavoris in the listed array
// for eaach flavor in flavors
// if a flavor exists, increase the flavor count by 1
// otherwise set the flavor count to 1
// return the count
function countFlavors(flavors) {
  const counts = {};
  flavors.forEach(flavor => {
      if (counts[flavor]) {
          counts[flavor] += 1;
      } else {
          counts[flavor] = 1;
      }
  });
  return counts;
}

// Function to get flavors input from the user and display the counts
// set the flavorInput to be a prompt for the user and store it
// split the flavorInput by commas and store the result as flavorCounts
// return the falvorCounts to the console

function getFlavors() {
  const flavorInput = prompt(`Please enter a list of comma-separated froyo flavors:`);
  const flavors = flavorInput.split(',');
  const flavorCounts = countFlavors(flavors);
  console.log(flavorCounts);
}

// execute the function
getFlavors();