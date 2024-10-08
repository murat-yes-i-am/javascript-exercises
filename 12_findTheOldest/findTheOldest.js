const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  const ages = people.map(({yearOfBirth, yearOfDeath}) => (yearOfDeath ?? currentYear) - yearOfBirth);

  const maxAge = Math.max(...ages);

  const oldestIndex = ages.indexOf(maxAge);

  // const oldestIndex = ages.reduce((prevMaxAgeIndex, age, index, array) => {
  //   if (age > array[prevMaxAgeIndex]) { 
  //     prevMaxAgeIndex = index;
  //   }

  //   return prevMaxAgeIndex;
  // }, -1);

  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
