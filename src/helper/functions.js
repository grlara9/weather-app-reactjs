export const convertToFah = (cel) => {
    var fahrenheit = Math.floor(cel * (9/5) + 32)
    return fahrenheit;
}