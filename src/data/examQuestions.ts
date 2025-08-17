export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface Translation {
  [key: string]: {
    question: string;
    options: string[];
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
    category: "Government and Politics"
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
    category: "Culture and Traditions"
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
    category: "Government and Politics"
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
    category: "Geography"
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
    category: "Law and Order"
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
    category: "Culture and Traditions"
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
    category: "Economy"
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
    category: "Government and Politics"
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
    category: "Public Services"
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
    category: "Geography"
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
    category: "Culture and Traditions"
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
    category: "Government and Politics"
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
    category: "Geography"
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
    category: "Culture and Traditions"
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
    category: "Education"
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
    category: "History"
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
    category: "Geography"
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
    category: "Culture and Traditions"
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
    category: "Literature"
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
    category: "Public Services"
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
    category: "Government and Politics"
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
    category: "Geography"
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
    category: "Culture and Traditions"
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
    category: "Government and Politics"
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
      ]
    },
    "2": {
      question: "Który kwiat jest kojarzony z Anglią?",
      options: [
        "Oset",
        "Żonkil",
        "Róża",
        "Koniczyna"
      ]
    },
    "3": {
      question: "W jakim wieku można głosować w wyborach powszechnych?",
      options: [
        "16",
        "17", 
        "18",
        "21"
      ]
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
      ]
    },
    "2": {
      question: "¿Qué flor está asociada con Inglaterra?",
      options: [
        "Cardo",
        "Narciso",
        "Rosa", 
        "Trébol"
      ]
    },
    "3": {
      question: "¿A qué edad puedes votar en unas elecciones generales?",
      options: [
        "16",
        "17",
        "18",
        "21"
      ]
    }
    // Add more translations as needed...
  }
  // Add more languages as needed...
};