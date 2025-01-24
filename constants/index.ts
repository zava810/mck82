export const categoryOptions = [
  {
    value: "general_knowledge",
    option: "general knowledge",
  },
  {
    value: "arts_and_literature",
    option: "Arts n literature",
  },
  {
    value: "film_and_tv",
    option: "philm n tv",
  },
  {
    value: "food_and_drink",
    option: "phood n drink",
  },
  {
    value: "society_and_culture",
    option: "society n culture",
  },
  {
    value: "geography",
    option: "geogrAphy",
  },
  {
    value: "history",
    option: "History",
  },
  {
    value: "music",
    option: "music",
  },
  {
    value: "sport_and_leisure",
    option: "sport & leisure",
  },
  {
    value: "science",
    option: "science_vigyan",
  },
];

export const difficultyOptions = [
  {
    value: "easy",
    option: "easy",
  },
  {
    value: "medium",
    option: "medium",
  },
  {
    value: "hard",
    option: "HArd",
  },
];

export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "general_knowledge") return "general Knowledge";
  else if (category === "science") return "science";
  else if (category === "sport_and_leisure") return "sports & leisure";
  else if (category === "music") return "music";
  else if (category === "history") return "History";
  else if (category === "geography") return "geogrAphy";
  else if (category === "society_and_culture") return "society & culture";
  else if (category === "arts_and_literature") return "Arts & Literture";
  else if (category === "film_and_tv") return "philm n tv";
  else if (category === "food_and_drink") return "phood n drink";
};
