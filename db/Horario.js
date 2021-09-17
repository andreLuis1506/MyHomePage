const date = new Date

const dias = [
  {
      id: 1,
      materias: [1,2]
  },
  {
      id: 2,
      materias: [3]
  }, 
  {
      id: 3,
      materias: [4,3,1]
  },
  {
      id: 4,
      materias: []
  },
  {
    id: 5,
    materias: []
  }
]

const materias = [
  {
    id:1,
    nome: "Gestão de T.I.",
    link: "https://classroom.google.com/u/1/c/Mzc3NTA4OTQwMjI3",
    horario: date.getDay() == 1 ? 14 : 16
    
  },
  {
    id: 2,
    nome: "Topicos em Programção",
    link: "https://classroom.google.com/u/1/c/Mzc3NjQ0NDc3NTU1",
    horario: 17
  },
  {
    id: 3,
    nome: "Projeto de Inovação",
    link: "https://classroom.google.com/u/1/c/Mzc5MTgyMTUxMDYw",
    horario: date.getDay() == 2 ? 14 : 15
  },
  {
    id: 4,
    nome: "Informatica e Sociedade",
    link: "https://classroom.google.com/u/1/c/Mzc3OTIwMzk1Njk2",
    horario: 14
  },
]