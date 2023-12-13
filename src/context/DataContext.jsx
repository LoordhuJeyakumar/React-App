import { createContext } from "react";

const teacherData = [
  {
    fullName: "David Johns",
    address: {
      address: "570 Hand Parks",
      city: "Amalāpuram",
      state: "Tamil Nadu",
      pincode: "713325",
    },
    id: 1,
    phone: "0335640279",
    doj: "2020-12-10",
    email: "David_Johns@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["English", "Maths"],
    salary: 5501,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Jackie Abbott",
    address: {
      address: "325 Oceane Stravenue",
      city: "Fatehpur Sīkri",
      state: "Tamil Nadu",
      pincode: "503114",
    },
    id: 2,
    phone: "4310802615",
    doj: "2023-11-26",
    email: "Jackie.Abbott5@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["Social science", "Social science"],
    salary: 9808,
    isClassTeacher: true,
    assignedClass: "12",
    isOnline: true,
  },
  {
    fullName: "Nicholas Simonis",
    address: {
      address: "100 Jevon Green",
      city: "George Town",
      state: "Tamil Nadu",
      pincode: "744112",
    },
    id: 3,
    phone: "8397112077",
    doj: "2020-07-25",
    email: "Nicholas.Simonis18@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["Tamil", "Tamil", "English"],
    salary: 17588,
    isClassTeacher: true,
    assignedClass: "6",
    isOnline: true,
  },
  {
    fullName: "Crystal Bosco",
    address: {
      address: "329 Goldner Overpass",
      city: "Khātegaon",
      state: "Tamil Nadu",
      pincode: "700048",
    },
    id: 4,
    phone: "2430604750",
    doj: "2021-11-05",
    email: "Crystal14@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["Science", "Science", "English"],
    salary: 7022,
    isClassTeacher: false,
    assignedClass: "11",
    isOnline: true,
  },
  {
    fullName: "Scott Howell",
    address: {
      address: "10550 Abdullah Circles",
      city: "Rānīganj",
      state: "Tamil Nadu",
      pincode: "431111",
    },
    id: 5,
    phone: "8779524161",
    doj: "2022-08-13",
    email: "Scott_Howell86@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "Tamil",
    teachingSubjects: ["Maths", "Social science", "English"],
    salary: 27241,
    isClassTeacher: false,
    assignedClass: "6",
    isOnline: false,
  },
  {
    fullName: "Lloyd Mills",
    address: {
      address: "11333 Lori Track",
      city: "Bhadrāvati",
      state: "Tamil Nadu",
      pincode: "110044",
    },
    id: 6,
    phone: "4086967961",
    doj: "2023-10-31",
    email: "Lloyd_Mills@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["English", "Tamil", "Maths"],
    salary: 16327,
    isClassTeacher: true,
    assignedClass: "10",
    isOnline: false,
  },
  {
    fullName: "Lori Abernathy",
    address: {
      address: "9333 Ursula Cove",
      city: "Chhāta",
      state: "Tamil Nadu",
      pincode: "843129",
    },
    id: 7,
    phone: "8812897055",
    doj: "2021-03-26",
    email: "Lori.Abernathy25@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["Social science"],
    salary: 11407,
    isClassTeacher: true,
    assignedClass: null,
    isOnline: false,
  },
  {
    fullName: "Randal Tromp",
    address: {
      address: "76465 Aniya Flat",
      city: "Panna",
      state: "Tamil Nadu",
      pincode: "623708",
    },
    id: 8,
    phone: "8087782350",
    doj: "2023-01-15",
    email: "Randal_Tromp@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["Social science", "Maths", "English"],
    salary: 18981,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: false,
  },
  {
    fullName: "Jasmine Hane",
    address: {
      address: "1720 Leda Mall",
      city: "Nautanwa",
      state: "Tamil Nadu",
      pincode: "533292",
    },
    id: 9,
    phone: "7451565674",
    doj: "2023-06-26",
    email: "Jasmine_Hane92@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["Maths"],
    salary: 14350,
    isClassTeacher: true,
    assignedClass: "10",
    isOnline: false,
  },
  {
    fullName: "Keith Carter",
    address: {
      address: "28832 Blanda Estates",
      city: "Honāvar",
      state: "Tamil Nadu",
      pincode: "312001",
    },
    id: 10,
    phone: "1308644470",
    doj: "2022-05-16",
    email: "Keith92@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["Maths"],
    salary: 2437,
    isClassTeacher: false,
    assignedClass: "9",
  },
  {
    fullName: "Sue Lynch",
    address: {
      address: "170 Graciela Brook",
      city: "Nokha",
      state: "Tamil Nadu",
      pincode: "333022",
    },
    id: 11,
    phone: "4167754854",
    doj: "2023-05-28",
    email: "Sue.Lynch@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["English"],
    salary: 28336,
    isClassTeacher: true,
    assignedClass: "10",
    isOnline: false,
  },
  {
    fullName: "Rita Mayert",
    address: {
      address: "1234 Marquardt Village",
      city: "Shāhpur",
      state: "Tamil Nadu",
      pincode: "171207",
    },
    id: 12,
    phone: "5731861469",
    doj: "2021-09-16",
    email: "Rita_Mayert90@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["Tamil", "Social science"],
    salary: 8751,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: false,
  },
  {
    fullName: "Reginald Ebert",
    address: {
      address: "8792 Homenick Roads",
      city: "Vettaikkaranpudur",
      state: "Tamil Nadu",
      pincode: "306304",
    },
    id: 13,
    phone: "5588905913",
    doj: "2022-02-04",
    email: "Reginald_Ebert@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["Science", "Science", "Science"],
    salary: 14127,
    isClassTeacher: true,
    assignedClass: null,
    isOnline: false,
  },
  {
    fullName: "Sophia Dietrich",
    address: {
      address: "702 Leda Knolls",
      city: "Nāndūra Buzurg",
      state: "Tamil Nadu",
      pincode: "802165",
    },
    id: 14,
    phone: "7888154010",
    doj: "2022-04-05",
    email: "Sophia.Dietrich90@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["English"],
    salary: 4255,
    isClassTeacher: true,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Ronald Robel",
    address: {
      address: "34436 Harvey Street",
      city: "Kāveripatnam",
      state: "Tamil Nadu",
      pincode: "833106",
    },
    id: 15,
    phone: "2376122418",
    doj: "2023-10-16",
    email: "Ronald_Robel@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["Science", "Tamil", "Science"],
    salary: 18739,
    isClassTeacher: true,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Hubert Pacocha",
    address: {
      address: "55429 Marion Mews",
      city: "Khārupatia",
      state: "Tamil Nadu",
      pincode: "765029",
    },
    id: 16,
    phone: "7960592517",
    doj: "2023-08-21",
    email: "Hubert_Pacocha@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["English", "Social science", "Tamil"],
    salary: 24693,
    isClassTeacher: false,
    assignedClass: "6",
    isOnline: true,
  },
  {
    fullName: "Sidney Bahringer",
    address: {
      address: "151 Shanna Plains",
      city: "Pherzawl",
      state: "Tamil Nadu",
      pincode: "383225",
    },
    id: 17,
    phone: "1883187642",
    doj: "2020-10-10",
    email: "Sidney.Bahringer@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["Science", "Science"],
    salary: 22165,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Sheryl Sipes",
    address: {
      address: "44641 Hellen Cape",
      city: "Mowād",
      state: "Tamil Nadu",
      pincode: "502103",
    },
    id: 18,
    phone: "8602622024",
    doj: "2021-06-24",
    email: "Sheryl.Sipes@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Tamil",
    teachingSubjects: ["Maths"],
    salary: 26596,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Colin Parker",
    address: {
      address: "271 Retta Greens",
      city: "Nāwa",
      state: "Tamil Nadu",
      pincode: "273413",
    },
    id: 19,
    phone: "2626736023",
    doj: "2021-01-27",
    email: "Colin.Parker@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["Social science"],
    salary: 15192,
    isClassTeacher: true,
    assignedClass: "11",
    isOnline: true,
  },
  {
    fullName: "Sue Stroman",
    address: {
      address: "127 Cartwright Fords",
      city: "Lumding Railway Colony",
      state: "Tamil Nadu",
      pincode: "391121",
    },
    id: 20,
    phone: "4962598042",
    doj: "2022-11-16",
    email: "Sue40@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["Maths", "Tamil", "Social science"],
    salary: 8369,
    isClassTeacher: true,
    assignedClass: "8",
    isOnline: true,
  },
  {
    fullName: "Terence Schulist",
    address: {
      address: "12529 Kassulke Path",
      city: "Bālāpur",
      state: "Tamil Nadu",
      pincode: "415716",
    },
    id: 21,
    phone: "0825032350",
    doj: "2023-04-30",
    email: "Terence_Schulist@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Tamil",
    teachingSubjects: ["English"],
    salary: 17593,
    isClassTeacher: true,
    assignedClass: "7",
    isOnline: true,
  },
  {
    fullName: "Micheal Murphy",
    address: {
      address: "85253 Randy Mountain",
      city: "Elumalai",
      state: "Tamil Nadu",
      pincode: "631702",
    },
    id: 22,
    phone: "5272201295",
    doj: "2021-08-09",
    email: "Micheal.Murphy@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["English", "Maths", "Maths"],
    salary: 6594,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Eunice Bernhard",
    address: {
      address: "87781 Thiel Union",
      city: "Nūrmahal",
      state: "Tamil Nadu",
      pincode: "689506",
    },
    id: 23,
    phone: "9281385369",
    doj: "2020-01-07",
    email: "Eunice.Bernhard@yahoo.com",
    qualification: "B.Ed",
    coreSubject: "Maths",
    teachingSubjects: ["English", "Maths", "Science"],
    salary: 7370,
    isClassTeacher: true,
    assignedClass: "9",
    isOnline: true,
  },
  {
    fullName: "Jay Mante",
    address: {
      address: "40558 Mills Ford",
      city: "Gursarāi",
      state: "Tamil Nadu",
      pincode: "628401",
    },
    id: 24,
    phone: "3928088788",
    doj: "2022-10-03",
    email: "Jay14@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Social science",
    teachingSubjects: ["Social science", "Tamil", "Maths"],
    salary: 13816,
    isClassTeacher: false,
    assignedClass: null,
    isOnline: true,
  },
  {
    fullName: "Sheri Schimmel",
    address: {
      address: "9166 Vena Crest",
      city: "Pherzawl",
      state: "Tamil Nadu",
      pincode: "515002",
    },
    id: 25,
    phone: "3233608558",
    doj: "2022-11-16",
    email: "Sheri_Schimmel21@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["Social science"],
    salary: 17197,
    isClassTeacher: true,
    assignedClass: null,
    isOnline: false,
  },
  {
    fullName: "Miguel Moore",
    address: {
      address: "80874 Crooks Ridges",
      city: "Nautanwa",
      state: "Tamil Nadu",
      pincode: "132105",
    },
    id: 26,
    phone: "4165766277",
    doj: "2020-01-16",
    email: "Miguel94@gmail.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["Tamil", "English"],
    salary: 13469,
    isClassTeacher: false,
    assignedClass: "8",
    isOnline: false,
  },
  {
    fullName: "Antoinette Ruecker",
    address: {
      address: "342 Kirlin Common",
      city: "Jagdīspur",
      state: "Tamil Nadu",
      pincode: "321607",
    },
    id: 27,
    phone: "2351648386",
    doj: "2023-11-20",
    email: "Antoinette60@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "English",
    teachingSubjects: ["Maths", "Maths"],
    salary: 25049,
    isClassTeacher: true,
    assignedClass: "8",
    isOnline: false,
  },
  {
    fullName: "Clay Runolfsson",
    address: {
      address: "7976 Giovanna Islands",
      city: "Sikka",
      state: "Tamil Nadu",
      pincode: "761019",
    },
    id: 28,
    phone: "0118469345",
    doj: "2022-06-19",
    email: "Clay_Runolfsson@hotmail.com",
    qualification: "B.Ed",
    coreSubject: "Science",
    teachingSubjects: ["Maths", "Tamil"],
    salary: 2566,
    isClassTeacher: true,
    assignedClass: "10",
    isOnline: true,
  },
];
const apiURL = `https://students-teachers-be.onrender.com/`;
const teacherDataContext = createContext(teacherData);

export { teacherDataContext as default, teacherData };
