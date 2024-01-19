const findTheOldest = function(people) {
  return people.sort((personA, personB) => {
    const currentYear = (new Date).getFullYear(); 
    const personAAge = (personA.yearOfDeath ?? currentYear) - personA.yearOfBirth;
    const personBAge = (personB.yearOfDeath ?? currentYear) - personB.yearOfBirth;
    return personAAge > personBAge ? -1 : 1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
