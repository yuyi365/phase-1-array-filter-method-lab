/*
    findMatching() --> two arguments (takes an array of drivers' names, string)
    returns: a matching list of drivers
*/

    const findMatching = (arrayOfDriverNames, input) => {
        return arrayOfDriverNames.filter(potentialNameMatch => potentialNameMatch.toLowerCase() === input.toLowerCase());
    }

/*
    fuzzyMatch() --> two arguments (takes an array of drivers' names, string)
    returns: all drivers that 
*/

const fuzzyMatch = (arrayOfDriverNames, inputTwo) => {
    return arrayOfDriverNames.filter(newDriverName => newDriverName.startsWith(inputTwo));
}

/*
    matchName() 
    takes an array of driver objects and a string as arguments. 
    Each driver object has two properties: name and hometown.
    
    Return: each element whose name property matches the provided string argument.
*/

const matchName = (arrayOfDriverNames, inputThree) => {
    return arrayOfDriverNames.filter(checkMatchName => checkMatchName.name === inputThree);
}