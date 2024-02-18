
interface IInfoContacts {
  job: string, 
  name: string,
  university: string,
}

export interface IContacts {
  id: number,
  ua: IInfoContacts,
  en: IInfoContacts,
  email: string[],
}

export default [
  {
    id: 1,
     ua: {
        job: "Міжнародний координатор проєкту BOOST", 
        name: "Олександра Головко",
        university: "Нарвський коледж Тартуського університету (Естонія)"
     },
     en: {
        job: "BOOST project international coordinator", 
        name: "Oleksandra Golovko ",
        university: "Tartu University Narva College, Estonia",
     },
     email: ["oleksandra.golovko@ut.ee"]
  },
  {
    id: 2,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Sonja Rutar",
        university: "Приморський університет (Словенія)"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Sonja Rutar",
        university: "University of Primorska (Slovenia)", 
     },
     email: ["Sonja.Rutar@pef.upr.si"]
  },
  {
    id: 3,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Iwona Dwojacka",
        university: "Державний Університет в Ельблонзі (Польща)"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Iwona Dwojacka",
        university: "University of Applied Sciences in Elblag (Poland)",  
     },
     email: ["i.dwojacka@ans-elblag.pl"]
  },
  {
    id: 4,
     ua: {
        job: "Національний координатор проєкту BOOST", 
        name: "Марина Зуєнко",
        university: "Полтавський національний педагогічний університет імені В.Г. Короленка (Україна)"
     },
     en: {
        job: "BOOST project Ukrainian national coordinator", 
        name: "Maryna Zuyenko",
        university: "Poltava V.G. Korolenko National Pedagogical University (Ukraine)", 
     },
     email: ["international@gsuite.pnpu.edu.ua", "marinazuenko1406@gmail.com"]
  },
  {
    id: 5,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Сергій Колесніченко",
        university: "Донбаська національна академія будівництва і архітектури (Україна)"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Sergiy Kolesnichenko",
        university: "Donbas National Academy of Civil Engineering and Architecture (Ukraine)", 
     },
     email: ["svk.mk15@gmail.com"]
  },
  {
    id: 6,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Аліна Маслова",
        university: "Мелітопольський державний педагогічний університет імені Богдана Хмельницького (Україна)"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Alina Maslova",
        university: "Bogdan Khmelnitsky Melitopol State Pedagogical University (Ukraine)", 
     },
     email: ["mav2429@gmail.com"]
  },
  {
    id: 7,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Микола Каплієнко",
        university: "Ізмаїльський державний гуманітарний університет"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Mykola Kapliienko",
        university: "Izmail State University of Humanities (Ukraine)", 
     },
     email: ["vms.idgu@ukr.net"]
  },
  {
    id: 8,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Василь Кучер",
        university: "Кременецька обласна гуманітарно-педагогічна академія імені Тараса Шевченка"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Vasyl Kucher",
        university: "Kremenets Taras Shevchenko Regional Academy of Humanities and Pedagogy (Ukraine)", 
     },
     email: ["kuchervv2016@gmail.com"]
  },
  {
    id: 9,
     ua: {
        job: "Координатор проєкту BOOST", 
        name: "Svitlana Nesterova",
        university: "Мукачівський державний університет (Україна)"
     },
     en: {
        job: "BOOST project coordinator", 
        name: "Svitlana Nesterova",
        university: "Mukachevo State University (Ukraine)", 
     },
     email: ["svnest7@gmail.com"]
  },
] as IContacts[]
