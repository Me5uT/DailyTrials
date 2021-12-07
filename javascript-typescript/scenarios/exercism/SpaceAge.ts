// Given an age in seconds, calculate how old someone would be on:

//     Mercury: orbital period 0.2408467 Earth years
//     Venus: orbital period 0.61519726 Earth years
//     Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
//     Mars: orbital period 1.8808158 Earth years
//     Jupiter: orbital period 11.862615 Earth years
//     Saturn: orbital period 29.447498 Earth years
//     Uranus: orbital period 84.016846 Earth years
//     Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

enum Planets {
  earth = 1,
  mercury = 0.2408467,
  venus = 0.61519726,
  mars = 1.8808158,
  jupiter = 11.862615,
  saturn = 29.447498,
  uranus = 84.016846,
  neptune = 164.79132,
}

function age(planet: string, seconds: number): number {
  const year: number = seconds / 31557600;

  return Number((year / Planets[planet as keyof typeof Planets]).toFixed(2));
}

age("mercury", 2134835688);
age("venus", 189839836);
age("earth", 1000000000);
