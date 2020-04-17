// INSTRUCTIONS

// The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

// Your task is to implement it.

// roulette

// You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

// Given the population and fitnesses, your task is to run the roulette to return one element.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

// LINK

// https://www.codewars.com/kata/567b21565ffbdb30e3000010/train/javascript


// SOLUTION

const select = (pop, fits) => {
  const random = Math.random();

  for (let i = 0; i < pop.length; i++) if (random <= fits[i]) return pop[i];
};