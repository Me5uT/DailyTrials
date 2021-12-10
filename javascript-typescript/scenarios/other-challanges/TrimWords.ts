function trimWords(word: string): string {
  return word
    .split("")
    .filter((harf) => harf !== " ")
    .join("");
}

trimWords("  SHIRA  ");
trimWords("shire   ");
