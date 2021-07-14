// always comment what is important and complex
const checkName = (name) => {
  let nameLength = name.length;

  console.log(nameLength);

  // if nameLength > 0 we slice the string  else we substring
  nameLength > 0
    ? console.log(name.slice(7))
    : console.log(name.substring(7, 13));
};

const nameExmaple = 'Apple, Banana, Kiwi';

checkName(nameExmaple);
