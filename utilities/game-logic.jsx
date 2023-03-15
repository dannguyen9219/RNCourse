// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GenerateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  
  if (randomNumber === exclude) {
    return GenerateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}
