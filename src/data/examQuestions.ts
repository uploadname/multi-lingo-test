export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation: string;
}

export interface Translation {
  [key: string]: {
    question: string;
    options: string[];
    explanation: string;
  };
}

// Sample Life in the UK style questions
export const examQuestions: Question[] = [
  {
    id: 1,
    question: "What is the official name of the UK?",
    options: [
      "Great Britain",
      "United Kingdom of Great Britain and Northern Ireland", 
      "British Isles",
      "England and Wales"
    ],
    correctAnswer: 1,
    category: "Government and Politics",
    explanation: "The official name is 'United Kingdom of Great Britain and Northern Ireland', which includes England, Scotland, Wales, and Northern Ireland."
  },
  {
    id: 2,
    question: "Which flower is associated with England?",
    options: [
      "Thistle",
      "Daffodil", 
      "Rose",
      "Shamrock"
    ],
    correctAnswer: 2,
    category: "Culture and Traditions",
    explanation: "The rose is the national flower of England. The thistle represents Scotland, the daffodil represents Wales, and the shamrock represents Ireland."
  },
  {
    id: 3,
    question: "At what age can you vote in a general election?",
    options: [
      "16",
      "17",
      "18", 
      "21"
    ],
    correctAnswer: 2,
    category: "Government and Politics",
    explanation: "You must be 18 years old to vote in UK general elections, although you can register to vote when you are 16 or 17."
  },
  {
    id: 4,
    question: "Which of the following is a Crown Dependency?",
    options: [
      "Wales",
      "Scotland",
      "Isle of Man",
      "Northern Ireland"
    ],
    correctAnswer: 2,
    category: "Geography",
    explanation: "The Isle of Man is a Crown Dependency, not part of the UK but under the sovereignty of the British Crown. Wales, Scotland, and Northern Ireland are constituent countries of the UK."
  },
  {
    id: 5,
    question: "What is the minimum age for jury service?",
    options: [
      "16",
      "18",
      "21",
      "25"
    ],
    correctAnswer: 1,
    category: "Law and Order",
    explanation: "You must be at least 18 years old to serve on a jury in the UK, and you must be registered to vote."
  },
  {
    id: 6,
    question: "Which sport is associated with Wimbledon?",
    options: [
      "Football",
      "Cricket", 
      "Tennis",
      "Rugby"
    ],
    correctAnswer: 2,
    category: "Culture and Traditions",
    explanation: "Wimbledon is the world's oldest tennis tournament and is widely considered the most prestigious. It takes place in Wimbledon, London."
  },
  {
    id: 7,
    question: "What is the currency of the UK?",
    options: [
      "Euro",
      "Dollar",
      "Pound Sterling",
      "Franc"
    ],
    correctAnswer: 2,
    category: "Economy",
    explanation: "The UK uses Pound Sterling (£) as its currency. The UK chose not to adopt the Euro when it was introduced."
  },
  {
    id: 8,
    question: "Who is the head of state of the UK?",
    options: [
      "Prime Minister",
      "President",
      "The King/Queen",
      "Speaker of the House"
    ],
    correctAnswer: 2,
    category: "Government and Politics",
    explanation: "The monarch (currently King Charles III) is the head of state, while the Prime Minister is the head of government."
  },
  {
    id: 9,
    question: "What does the abbreviation 'NHS' stand for?",
    options: [
      "National Health Service",
      "National Housing Scheme",
      "National Heritage Society", 
      "National Highway System"
    ],
    correctAnswer: 0,
    category: "Public Services",
    explanation: "The NHS (National Health Service) provides free healthcare to UK residents, funded through taxation."
  },
  {
    id: 10,
    question: "Which city is the capital of Scotland?",
    options: [
      "Glasgow",
      "Aberdeen",
      "Dundee",
      "Edinburgh"
    ],
    correctAnswer: 3,
    category: "Geography",
    explanation: "Edinburgh is the capital city of Scotland and home to the Scottish Parliament. Glasgow is the largest city in Scotland."
  },
  {
    id: 11,
    question: "What is celebrated on 5th November?",
    options: [
      "Halloween",
      "Guy Fawkes Night",
      "Christmas",
      "Easter"
    ],
    correctAnswer: 1,
    category: "Culture and Traditions",
    explanation: "Guy Fawkes Night (Bonfire Night) commemorates the failure of the Gunpowder Plot of 1605, when Guy Fawkes tried to blow up Parliament."
  },
  {
    id: 12,
    question: "How many members does the House of Commons have?",
    options: [
      "550",
      "600",
      "650",
      "700"
    ],
    correctAnswer: 2,
    category: "Government and Politics",
    explanation: "The House of Commons has 650 Members of Parliament (MPs), each representing a constituency across the UK."
  },
  {
    id: 13,
    question: "Which language is spoken by the most people in Wales?",
    options: [
      "Welsh",
      "English",
      "Scottish Gaelic",
      "Irish"
    ],
    correctAnswer: 1,
    category: "Geography",
    explanation: "English is spoken by the majority of people in Wales, although Welsh is also an official language and is taught in schools."
  },
  {
    id: 14,
    question: "What is the name of the UK's national anthem?",
    options: [
      "Rule Britannia",
      "God Save the King/Queen",
      "Jerusalem",
      "Land of Hope and Glory"
    ],
    correctAnswer: 1,
    category: "Culture and Traditions",
    explanation: "The UK's national anthem is 'God Save the King' (or 'God Save the Queen' when the monarch is female)."
  },
  {
    id: 15,
    question: "At what age do children start secondary school?",
    options: [
      "10",
      "11",
      "12",
      "13"
    ],
    correctAnswer: 1,
    category: "Education",
    explanation: "Children in the UK typically start secondary school at age 11, after completing primary school education."
  },
  {
    id: 16,
    question: "Which of these is a famous British scientist?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Marie Curie",
      "Galileo Galilei"
    ],
    correctAnswer: 1,
    category: "History",
    explanation: "Sir Isaac Newton was a famous British scientist who formulated the laws of motion and universal gravitation."
  },
  {
    id: 17,
    question: "What is the longest river in the UK?",
    options: [
      "River Thames",
      "River Severn",
      "River Trent",
      "River Mersey"
    ],
    correctAnswer: 1,
    category: "Geography",
    explanation: "The River Severn is the longest river in the UK at 220 miles (354 km), flowing through Wales and England."
  },
  {
    id: 18,
    question: "Which of these is a British public holiday?",
    options: [
      "Independence Day",
      "Thanksgiving",
      "Boxing Day",
      "Columbus Day"
    ],
    correctAnswer: 2,
    category: "Culture and Traditions",
    explanation: "Boxing Day (26th December) is a public holiday in the UK. The others are American holidays."
  },
  {
    id: 19,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "George Orwell"
    ],
    correctAnswer: 1,
    category: "Literature",
    explanation: "William Shakespeare wrote 'Romeo and Juliet', one of his most famous plays, in the late 16th century."
  },
  {
    id: 20,
    question: "What is the emergency telephone number?",
    options: [
      "999",
      "911",
      "000",
      "112"
    ],
    correctAnswer: 0,
    category: "Public Services",
    explanation: "999 is the main emergency number in the UK for police, fire, and ambulance services. 112 also works but 999 is more commonly known."
  },
  {
    id: 21,
    question: "Which house of Parliament is elected?",
    options: [
      "House of Lords",
      "House of Commons",
      "Both houses",
      "Neither house"
    ],
    correctAnswer: 1,
    category: "Government and Politics",
    explanation: "The House of Commons is elected by the public. The House of Lords consists of appointed members and hereditary peers."
  },
  {
    id: 22,
    question: "What is the highest mountain in the UK?",
    options: [
      "Snowdon",
      "Scafell Pike",
      "Ben Nevis",
      "Helvellyn"
    ],
    correctAnswer: 2,
    category: "Geography",
    explanation: "Ben Nevis in Scotland is the highest mountain in the UK at 1,345 meters (4,413 feet)."
  },
  {
    id: 23,
    question: "Which of these is a traditional British food?",
    options: [
      "Pizza",
      "Fish and Chips",
      "Tacos",
      "Sushi"
    ],
    correctAnswer: 1,
    category: "Culture and Traditions",
    explanation: "Fish and chips is a traditional British dish that became popular in the 19th century and remains a staple of British cuisine."
  },
  {
    id: 24,
    question: "What does 'MP' stand for?",
    options: [
      "Military Police",
      "Member of Parliament",
      "Medical Practitioner",
      "Music Producer"
    ],
    correctAnswer: 1,
    category: "Government and Politics",
    explanation: "MP stands for Member of Parliament - an elected representative in the House of Commons."
  }
];

// Sample translations for Polish (demonstrating the translation system)
export const questionTranslations: { [key: string]: Translation } = {
  pl: {
    "1": {
      question: "Jaka jest oficjalna nazwa Wielkiej Brytanii?",
      options: [
        "Wielka Brytania",
        "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej",
        "Wyspy Brytyjskie", 
        "Anglia i Walia"
      ],
      explanation: "Oficjalna nazwa to 'Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej', które obejmuje Anglię, Szkocję, Walię i Irlandię Północną."
    },
    "2": {
      question: "Który kwiat jest kojarzony z Anglią?",
      options: [
        "Oset",
        "Żonkil",
        "Róża",
        "Koniczyna"
      ],
      explanation: "Róża jest narodowym kwiatem Anglii. Oset reprezentuje Szkocję, żonkil Walię, a koniczyna Irlandię."
    },
    "3": {
      question: "W jakim wieku można głosować w wyborach powszechnych?",
      options: [
        "16",
        "17", 
        "18",
        "21"
      ],
      explanation: "Musisz mieć ukończone 18 lat, aby głosować w wyborach powszechnych w UK, chociaż możesz zarejestrować się do głosowania w wieku 16 lub 17 lat."
    }
    // Add more translations as needed...
  },
  es: {
    "1": {
      question: "¿Cuál es el nombre oficial del Reino Unido?",
      options: [
        "Gran Bretaña",
        "Reino Unido de Gran Bretaña e Irlanda del Norte",
        "Islas Británicas",
        "Inglaterra y Gales"
      ],
      explanation: "El nombre oficial es 'Reino Unido de Gran Bretaña e Irlanda del Norte', que incluye Inglaterra, Escocia, Gales e Irlanda del Norte."
    },
    "2": {
      question: "¿Qué flor está asociada con Inglaterra?",
      options: [
        "Cardo",
        "Narciso",
        "Rosa", 
        "Trébol"
      ],
      explanation: "La rosa es la flor nacional de Inglaterra. El cardo representa Escocia, el narciso Gales, y el trébol Irlanda."
    },
    "3": {
      question: "¿A qué edad puedes votar en unas elecciones generales?",
      options: [
        "16",
        "17",
        "18",
        "21"
      ],
      explanation: "Debes tener 18 años para votar en las elecciones generales del Reino Unido, aunque puedes registrarte para votar a los 16 o 17 años."
    }
    // Add more translations as needed...
  }
  // Add more languages as needed...
};