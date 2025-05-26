const findTheOldest = function(people) {
    let oldest = {Age: 0};
    peopleCpy = people.slice();
    let currentYear = new Date().getFullYear();
    peopleCpy.forEach(person => {
        if (!("yearOfDeath" in person))
        {
            person.Age = currentYear - person.yearOfBirth;
        }
        else
        {
            person.Age = person.yearOfDeath - person.yearOfBirth;
        }
        console.log(person);
        if (person.Age > oldest.Age) oldest = person; 
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
