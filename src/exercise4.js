const countSequence = (sequence, input) => {
  if (input !== undefined) {
    return (sequence.length === 0 ? 0 : input.split(sequence).length - 1);
  }
  return input => {
    return (sequence.length === 0 ? 0 : input.split(sequence).length - 1);
  };
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
 };