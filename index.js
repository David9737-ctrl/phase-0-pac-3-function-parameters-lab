function introduction(name) {
    return `Hi, my name is ${name}.`;
}
const greeting = introduction("John");
console.log(greeting);
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
const js = introductionWithLanguage("John", "JavaScript");
console.log(js); 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const greeting1 = introductionWithLanguageOptional("Bob");
const greeting2 = introductionWithLanguageOptional("Charlie", "Python");

console.log(greeting1);  
console.log(greeting2); 
