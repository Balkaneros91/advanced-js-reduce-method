  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Extra explanation
let sums = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
});
console.log(sums);

// The reduce() method - part 2

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Toni',
    profession: 'Manager',
    yrsExperience: 10
  }
];


// Totaling a specific object property
// **  let totalExperience = teamMembers.reduce(teamMembers.yrsExperience(acc, curr) => acc + curr, 0);    // my try

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too
//  {Developer: 12, Designer: 4}    // result we want !!!

let expByProff = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(expByProff);