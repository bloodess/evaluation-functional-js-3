const yolo = (input) => {
  return input
    .filter(value => value.sex !== 3)
    .map(value => {
      return {
        name: value.name,
        sex: value.sex === 9 ? 3 : value.sex
      }
    })
    .reduce((acc, value) => {
      acc[value.sex].push(value)
      return acc
    }, [[], [], [], []])
    .map(value => value.map(character => character.name))

    .map((value, index) => {
      console.log('!!!!!!value et index : '+ value + 'Et : ' +index);
      
      let codeISOIEC5218
      switch (index) {
        case 0: { codeISOIEC5218 = 'not known'; break }
        case 1: { codeISOIEC5218 = 'male'; break }
        case 2: { codeISOIEC5218 = 'female'; break }
        case 3: { codeISOIEC5218 = 'not applicable'; break }
      }
      return `${value.length} ${codeISOIEC5218} character(s) ${value.join(", ")}`
    })

};

module.exports = {
  title: 'Exercise 2',
  run: yolo
};
