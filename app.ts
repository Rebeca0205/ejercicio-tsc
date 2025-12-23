interface BirthDate {
    year: number;
    month: number;
    day: number;
}

const fecha = "2010-05-12";

const [y = 0, m = 0, d = 0] = fecha
  .split("-")
  .map(Number);

const persona: BirthDate = {
    year: y,
    month: m,
    day: d
};

const giveAge = (bd:BirthDate) => {
    let result = 2025 - bd.year;

    return `La persona tiene ${result} años`
}

console.log(giveAge(persona));