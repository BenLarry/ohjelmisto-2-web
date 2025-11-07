'use strict';

const candidates = [];

const numCandidates = +prompt('How many candidates?');

for (let i = 0; i < numCandidates; i++) {
  let name = prompt(`Enter name for ${[i + 1]} candidate`);
  candidates.push({
    name: name,
    votes: 0,
  });
}

const numVoters = +prompt('How many voters?');

for (let i = 0; i < numVoters; i++) {
  let votedName = prompt('Enter name who you are voting for');
  const votedExists = candidates.find(
    (candidate) => candidate.name.toLowerCase() === votedName.toLowerCase()
  );

  if (votedExists) {
    votedExists.votes++;
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(
  `The winner is ${candidates[0].name} with ${candidates[0].votes} votes`
);
console.log('results:');
for (let i = 0; i < candidates.length; i++) {
  console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}
