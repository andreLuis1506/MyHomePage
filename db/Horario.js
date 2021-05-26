const date = new Date

const dias = [
  {
      id: 1,
      materias: [1,2,3]
  },
  {
      id: 2,
      materias: [6]
  }, 
  {
      id: 3,
      materias: [1,2,4]
  },
  {
      id: 4,
      materias: [3,5,7]
  },
  {
    id: 5,
    materias: [1,4,8]
  }
]

const materias = [
  {
    id:1,
    nome: "programção e padões de projeto",
    link: "https://classroom.google.com/u/1/c/MjY0MzcyOTM5NTUy",
    horario: 14
    
  },
  {
    id: 2,
    nome: "Empreendedorismo",
    link: "https://classroom.google.com/u/1/c/Mjc5NTQ5MDQ3Mjcy",
    horario: 15
  },
  {
    id: 3,
    nome: "Redes 2",
    link: "https://classroom.google.com/u/1/c/Mjc5MDEzOTM5OTY0",
    horario: date.getDay() == 4 ? 14 : 16
  },
  {
    id: 4,
    nome: "Engenharia de software 2",
    link: "https://classroom.google.com/u/1/c/Mjg0Mzc0ODQ1NTg0",
    horario: date.getDay() == 5 ? 15 : 16
  },
  {
    id: 5,
    nome: "Métodos cientificos",
    link: "https://classroom.google.com/u/1/c/Mjg1ODA3NzI0NDEx",
    horario: 15
  },
  {
    id: 6,
    nome: "Meio ambiente",
    link: "https://classroom.google.com/u/1/c/Mjg0MTM5ODU4MTgy",
    horario: 17
  },
  {
    id: 7,
    nome: "Tópicos em d. de software",
    link: "https://classroom.google.com/u/1/c/MjY0MzcyOTM5NjAx",
    horario: 17
  },
  {
    id: 8,
    nome: "Topicos em redes",
    link: "https://classroom.google.com/u/1/c/Mjg0Mzc0ODQ1NjA1",
    horario: 16
  }
]