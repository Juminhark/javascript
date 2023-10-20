const getFee = (isMember) => (isMember ? '$2.00' : '$10.00');

console.log(getFee(true)); // $2.00

console.log(getFee(false)); // $10.00

// falsy
console.log(getFee(null)); // $10.00
