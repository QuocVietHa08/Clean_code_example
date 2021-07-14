const checkName = (name) => {
  let nameLength = name.length;

  console.log(nameLength);

  nameLength > 0
    ? console.log(name.slice(7))
    : console.log(name.substring(7, 13));
};

const nameExmaple = 'Apple, Banana, Kiwi';

checkName(nameExmaple);
