let findTheOldest = function(people) {

  return people.reduce((oldestPerson, person) => {

    if(!person.yearOfDeath)
      person.yearOfDeath = 2019;  
      
    if(oldestPerson){
      return oldestPerson.yearOfDeath - oldestPerson.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? oldestPerson : person;
    } else 
      return person;
  }, {})
}

module.exports = findTheOldest
