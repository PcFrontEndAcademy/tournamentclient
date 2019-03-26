export function getEliminationRoundNumber(numberOfParticipants) {
  let currentPow = 1;

  while (2 ** currentPow < numberOfParticipants) {
    currentPow += 1;
  }

  return currentPow;
}
