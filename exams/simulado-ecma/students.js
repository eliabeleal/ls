const data = {
  "students": [
    {"id": "20142370120", "name": "ÁLAMO PÉRICLES NUNES DE ARAÚJO"},
    {"id": "20162370052", "name": "ANDERSON FABRICIO MEDEIROS DA SILVA"},
    {"id": "20152370239", "name": "CARLOS EDUARDO VICTOR CARNEIRO GONÇALVES COELHO"},
    {"id": "20142370252", "name": "DYNNAH HANNA MAX PEREIRA G. DA SILVA"},
    {"id": "20161370051", "name": "GEORGE KLYNSMANN GUIMARÃES MELO"},
    {"id": "20142370236", "name": "GLAUDJA FERREIRA ALEXANDRE"},
    {"id": "20142370279", "name": "HELENA JULIANA BARROS MIGUEL"},
    {"id": "20151370219", "name": "ÍTALLO NÓBREGA PRIMO"},
    {"id": "20152370123", "name": "JOSE RAIMUNDO FERNANDES FILHO"},
    {"id": "20151370227", "name": "JOSÉ VÍCTOR DANTAS"},
    {"id": "20162370057", "name": "JOSIVALDO GOMES RODRIGUES JÚNIOR"},
    {"id": "20152370085", "name": "MATHEUS AUGUSTO COUTINHO COSTA"},
    {"id": "20132370217", "name": "PEDRO SAULO GOMES VELOSO"},
    {"id": "20142370368", "name": "RAFAEL DA SILVA MARINHO"},
    {"id": "20162370007", "name": "Aaron Pedro Santana dos Santos"},
    {"id": "20162370008", "name": "Andre Vieira Xavier da Costa"},
    {"id": "20161370032", "name": "Dennison Augusto Franco e Silva"},
    {"id": "20162370035", "name": "Eliabe Leal de Oliveira"},
    {"id": "20161370009", "name": "Helder Jerônimo Leite Rangel"},
    {"id": "20161370040", "name": "João Pedro Albuquerque de Barros"},
    {"id": "20161370001", "name": "Jonildo Suéliton Santos de Melo"},
    {"id": "20162370005", "name": "Larissa de Sousa Moreira Gusmão"},
    {"id": "20162370025", "name": "Leonan Severino Batista da Silva"},
    {"id": "20161370013", "name": "Mayara Gomes Pereira"},
    {"id": "20161370021", "name": "Pedro Henrique de Sales Xavier"},
    {"id": "20161370031", "name": "Sabrina Holanda Florentino"},
    {"id": "20161370026", "name": "Veihmeyer de Alencar Toscano Moura"},
    {"id": "20162370030", "name": "William Oliveira Lima"}
  ]
}

function showStudentTable(data){
  return data.students
  .map((student, index) => {
    index = Number(index+1).toString().padStart(2, '0')
    let id = student.id
    let name = student.name
    return `${index} ${id} ${name}`
  })
  .join('\n')
}
console.log(showStudentTable(data))

function showStudentName(data){
  let maxLength = data.students.reduce(
    (max, student) => {
      return student.name.length > max ?
                student.name.length :
                max
    },
    0
  )

  return data.students
    .map(student => student.name.padStart(maxLength, ' '))
    .join('\n')
}
console.log(showStudentName(data))
