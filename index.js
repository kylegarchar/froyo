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

function getFlavors() {
  const flavorInput = prompt("Please enter a list of comma-separated froyo flavors:");
  const flavors = flavorInput.split(',');
  const flavorCounts = countFlavors(flavors);
  console.log(flavorCounts);
}

getFlavors();