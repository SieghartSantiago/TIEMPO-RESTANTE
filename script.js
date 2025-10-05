//* 28 de noviembre
const finClases = new Date(2025, 10, 28, 18, 10, 0)

const arrFeriados = [
  new Date(2025, 9, 10),
  new Date(2025, 10, 21),
  new Date(2025, 10, 24),
]
const arrJornadas = [new Date(2025, 9, 21), new Date(2025, 10, 26)]

/*
 * Formato:
 * {
 *  dia: new Date(2025, mes, dia),
 *  horario: [{
 *    materia: 'lorem ipsum',
 *    horarioComienzo: 'xx:xx',
 *    horarioFin: 'xx:xx'
 *  },
 *  ...
 * ]
 * }
 */
const cambioHorarioClases = [
  {
    dia: new Date(2025, 9, 15),
    horario: [
      {
        materia: 'Salida a MEGA',
        horarioComienzo: '07:00',
        horarioFin: '14:00'
      }
    ]
  }
]

const horarioClases = [
  { dia: 'Domingo', horario: [] },
  {
    dia: 'Lunes',
    horario: [
      {
        materia: 'Sistemas de TV',
        horarioComienzo: '08:00',
        horarioFin: '09:20',
      },
      {
        materia: 'Laboratorio de Computadoras',
        horarioComienzo: '09:30',
        horarioFin: '10:50',
      },
      {
        materia: 'Computadoras Electronicas',
        horarioComienzo: '11:00',
        horarioFin: '12:20',
      },
      {
        materia: 'Sistemas de Control',
        horarioComienzo: '13:30',
        horarioFin: '14:50',
      },
      {
        materia: 'Laboratorio de Computadoras',
        horarioComienzo: '15:00',
        horarioFin: '16:20',
      },
    ],
  },
  {
    dia: 'Martes',
    horario: [
      {
        materia: 'Sistemas de Control',
        horarioComienzo: '08:00',
        horarioFin: '9:20',
      },
      {
        materia: 'Organizacion Industrial',
        horarioComienzo: '09:30',
        horarioFin: '10:50',
      },
      {
        materia: 'Educacion Fisica',
        horarioComienzo: '14:00',
        horarioFin: '15:00',
      },
    ],
  },
  {
    dia: 'Miercoles',
    horario: [
      {
        materia: 'Computadoras Electronicas',
        horarioComienzo: '08:00',
        horarioFin: '09:20',
      },
      {
        materia: 'Relaciones Humanas',
        horarioComienzo: '09:30',
        horarioFin: '10:50',
      },
      {
        materia: 'Sistemas de Comunicaciones',
        horarioComienzo: '11:00',
        horarioFin: '12:20',
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '14:30',
        horarioFin: '15:45',
        semanaPorMedio: true,
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '16:00',
        horarioFin: '17:20',
        semanaPorMedio: true,
      },
    ],
  },
  {
    dia: 'Jueves',
    horario: [
      {
        materia: 'Sistemas de TV',
        horarioComienzo: '08:00',
        horarioFin: '09:20',
      },
      {
        materia: 'Sistemas de Comunicaciones',
        horarioComienzo: '09:30',
        horarioFin: '10:50',
      },
      {
        materia: 'Ingles',
        horarioComienzo: '11:00',
        horarioFin: '13:00',
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '14:30',
        horarioFin: '16:30',
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '17:00',
        horarioFin: '18:10',
      },
    ],
  },
  {
    dia: 'Viernes',
    horario: [
      {
        materia: 'Computadoras Electronicas',
        horarioComienzo: '08:00',
        horarioFin: '09:20',
      },
      {
        materia: 'Sistemas de Comunicaciones',
        horarioComienzo: '09:30',
        horarioFin: '10:50',
      },
      {
        materia: 'Sistemas de Control',
        horarioComienzo: '11:00',
        horarioFin: '12:20',
      },
      {
        materia: 'Educacion Fisica',
        horarioComienzo: '12:45',
        horarioFin: '13:45',
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '14:30',
        horarioFin: '16:30',
      },
      {
        materia: 'CAD CAM',
        horarioComienzo: '17:00',
        horarioFin: '18:10',
      },
    ],
  },
  {
    dia: 'Sabado',
    horario: [],
  },
]

// convierte "HH:MM" a minutos desde medianoche
function aMinutos(hora) {
  const [h, m] = hora.split(':').map(Number)
  return h * 60 + m
}

function materiaActual() {
  const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ]

  const ahora = new Date()
  const dia = diasSemana[ahora.getDay()] // nombre del día actual
  const clasesHoy = horarioClases.find((d) => d.dia === dia)

  if (!clasesHoy || clasesHoy.horario.length === 0) return false

  const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes()

  for (const clase of clasesHoy.horario) {
    const inicio = aMinutos(clase.horarioComienzo)
    const fin = aMinutos(clase.horarioFin)

    if (minutosAhora >= inicio && minutosAhora < fin) {
      return clase // está en clase
    }
  }

  return false // no hay clase en este momento
}

function esMiercolesConTaller(fecha) {
  // miércoles base donde SI hay taller
  const base = new Date(2025, 9, 8) // 8 octubre 2025

  const msPorSemana = 7 * 24 * 60 * 60 * 1000

  // diferencia en semanas (redondeado hacia abajo)
  const semanas = Math.floor((fecha - base) / msPorSemana)

  // si el número de semanas es par, hay taller
  return semanas % 2 === 0
}

function horarioAMs(inicio, fin) {
  // Convierte "HH:MM" a milisegundos desde la medianoche
  function aMs(hora) {
    const [h, m] = hora.split(':').map(Number)
    return (h * 60 + m) * 60 * 1000
  }

  const inicioMs = aMs(inicio)
  const finMs = aMs(fin)

  return finMs - inicioMs // diferencia en ms
}

let soloDia = false
// let timerParado = false

/*
 * 0 => Dias Totales
 * 1 => Dias Escuela
 * 2 => Horas Clase
 */
let modoContador = 0

function diasEnUnMes(año, mes) {
  // Los meses en JavaScript son de base cero (0 = enero, 1 = febrero, etc.)
  // Por lo tanto, para obtener el último día del mes, pasamos el mes siguiente y el día 0.
  // Por ejemplo, para marzo (mes 2), pasamos un 0 con el mes de abril (mes 3).
  return new Date(año, mes + 1, 0).getDate()
}

let diasActuales, horasActuales, minutosActuales, segundosActuales

function dosDigitos(num) {
  return String(num).padStart(2, '0')
}

document.getElementById(
  'fecha-final'
).innerText = `${finClases.toLocaleDateString()} ${dosDigitos(
  finClases.getHours()
)}:${dosDigitos(finClases.getMinutes())}:${dosDigitos(finClases.getSeconds())}`

const paroDeTiempoHtml = document.getElementById('paro-de-tiempo')

function comprobarSiEsFeriadoOJornada(ahora) {
  let hayFeriado = arrFeriados.some((dia) => {
    return (
      dia.getMonth() === ahora.getMonth() && dia.getDate() === ahora.getDate()
    )
  })

  if (hayFeriado) return 1

  let hayJornada = arrJornadas.some((dia) => {
    return (
      dia.getMonth() === ahora.getMonth() && dia.getDate() === ahora.getDate()
    )
  })

  if (hayJornada) return 2

  return 0
}

let primeraPasada = false

function obtenerTiempoRestante() {
  // if (timerParado) return
  const ahora = new Date()
  // const ahora = new Date(2025, 9, 10)

  let diffMs = finClases - ahora // diferencia en milisegundos

  if (diffMs < 0) diffMs = 0 // si ya pasó la fecha

  // convertir milisegundos a unidades
  diasActuales = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  diffMs -= diasActuales * (1000 * 60 * 60 * 24)

  horasActuales = Math.floor(diffMs / (1000 * 60 * 60))
  diffMs -= horasActuales * (1000 * 60 * 60)

  minutosActuales = Math.floor(diffMs / (1000 * 60))
  diffMs -= minutosActuales * (1000 * 60)

  segundosActuales = Math.floor(diffMs / 1000)

  if (modoContador === 1) {
    let mesAct = ahora.getMonth()
    let diaAct = ahora.getDate()
    for (let i = 0; i <= diasActuales; i++) {
      const diaAProbar = new Date(2025, mesAct, diaAct, 0, 0, 0).getDay()
      if (diaAProbar === 0 || diaAProbar === 6) {
        diasActuales--
      }
      diaAct++
      if (diaAct > diasEnUnMes(2025, mesAct)) {
        mesAct++
        diaAct = 1
      }
    }

    let diasSinClases = 0

    arrJornadas.forEach((dia) => {
      if (finClases > dia) diasSinClases++
    })

    arrFeriados.forEach((dia) => {
      if (finClases > dia) diasSinClases++
    })

    diasActuales -= diasSinClases

    let hoyJornadaOFeriado = comprobarSiEsFeriadoOJornada(ahora)

    if (
      ahora.getDay() === 0 ||
      ahora.getDay() === 6 ||
      hoyJornadaOFeriado > 0
    ) {
      horasActuales = finClases.getHours()
      minutosActuales = finClases.getMinutes()
      segundosActuales = finClases.getSeconds()
      paroDeTiempoHtml.innerText =
        hoyJornadaOFeriado === 1
          ? 'EN FERIADO'
          : hoyJornadaOFeriado === 2
          ? 'EN JORNADA'
          : 'EN FIN DE SEMANA'

      arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
      arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

      arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
      arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

      arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
      arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))

      // timerParado = true
    }
  } else if (modoContador === 2) {
    let mesAct = ahora.getMonth()
    let diaAct = ahora.getDate()
    let cantMs = 0
    for (let i = 0; i < diasActuales; i++) {
      const cantDiasMes = diasEnUnMes(mesAct)
      diaAct++
      if (diaAct > cantDiasMes) {
        diaAct = 1
        mesAct++
      }
      const diaSiguiente = new Date(2025, mesAct, diaAct)

      let arrHorarios

      let indexDiaCambio = -1

      for (let i = 0; i < cambioHorarioClases.length; i++) {
        if (
          cambioHorarioClases[i].dia.getMonth() === mesAct &&
          cambioHorarioClases[i].dia.getDate() === diaAct
        ) {
          indexDiaCambio = i
          break
        }
      }

      if (indexDiaCambio === -1) {
        arrHorarios = horarioClases[diaSiguiente.getDay()].horario
      } else {
        arrHorarios = cambioHorarioClases[indexDiaCambio].horario
      }

      if (!primeraPasada) console.log(horarioClases[diaSiguiente.getDay()].dia)
      if (
        diaSiguiente.getDay() === 0 ||
        diaSiguiente.getDay() === 6 ||
        comprobarSiEsFeriadoOJornada(diaSiguiente) > 0 ||
        (arrHorarios.semanaPorMedio && esMiercolesConTaller(diaSiguiente))
      ) {
        continue
      }
      for (let m = 0; m < arrHorarios.length; m++) {
        if (
          !arrHorarios[m].semanaPorMedio ||
          (arrHorarios[m].semanaPorMedio && esMiercolesConTaller(diaSiguiente))
        ) {
          if (!primeraPasada) console.log(arrHorarios[m])
          cantMs += horarioAMs(
            arrHorarios[m].horarioComienzo,
            arrHorarios[m].horarioFin
          )
        }
      }
    }

    primeraPasada = true

    if (
      finClases.getHours() > 0 ||
      finClases.getMinutes() > 0 ||
      finClases.getSeconds() > 0
    ) {
      diaFin = finClases.getDay()
      diaHorarioActual = horarioClases[diaFin].horario

      diaHorarioActual.forEach((materia) => {
        const msHorarioComienzo = aMinutos(materia.horarioComienzo) * 60 * 1000
        const msHorarioFinal = aMinutos(materia.horarioFin) * 60 * 1000
        const msFinClases =
          finClases.getHours() * 60 * 60 * 1000 +
          finClases.getMinutes() * 60 * 1000 +
          finClases.getSeconds() * 1000
        if (msFinClases >= msHorarioFinal) {
          cantMs += msHorarioFinal - msHorarioComienzo
        } else if (
          msFinClases > msHorarioComienzo &&
          msFinClases < msHorarioFinal
        ) {
          cantMs += msFinClases - msHorarioComienzo
        }
      })
    }

    diasActuales = Math.floor(cantMs / (1000 * 60 * 60 * 24))
    cantMs -= diasActuales * (1000 * 60 * 60 * 24)

    horasActuales = Math.floor(cantMs / (1000 * 60 * 60))
    cantMs -= horasActuales * (1000 * 60 * 60)

    minutosActuales = Math.floor(cantMs / (1000 * 60))
    cantMs -= minutosActuales * (1000 * 60)

    segundosActuales = Math.floor(cantMs / 1000)

    arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
    arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

    arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
    arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

    arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
    arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))

    arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
    arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))

    const materiaAct = materiaActual()

    if (!materiaAct) {
      paroDeTiempoHtml.innerText = 'SIN CLASES'
    } else {
      paroDeTiempoHtml.innerText = `EN ${materiaAct.materia.toUpperCase()}`
    }

    // timerParado = !materiaActual ? true : false
  }
}

function cambiarSegundo() {
  obtenerTiempoRestante()
  actualizarContador()
  setTimeout(() => {
    cambiarSegundo()
  }, 100)
}

function obtenerDigito(num, digito) {
  if (digito === 1) return Math.trunc(num / 10) % 10
  return num % 10
}

const contenedorDiasHtml = document.getElementById('dias'),
  contenedorHorasHtml = document.getElementById('horas'),
  contenedorMinutosHtml = document.getElementById('minutos'),
  contenedorSegundosHtml = document.getElementById('segundos')

function actualizarContador() {
  if (comprobarSiEsFeriadoOJornada(new Date()) > 0 && modoContador === 1) return

  arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
  arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

  arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
  arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

  arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
  arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))

  arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
  arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))
}

obtenerTiempoRestante()

const arrDigitosDias = [
  new Digito(obtenerDigito(diasActuales, 1)),
  new Digito(obtenerDigito(diasActuales, 0)),
]

contenedorDiasHtml.appendChild(arrDigitosDias[0].crearHtml())
contenedorDiasHtml.appendChild(arrDigitosDias[1].crearHtml())

const arrDigitosHoras = [
  new Digito(obtenerDigito(horasActuales, 1)),
  new Digito(obtenerDigito(horasActuales, 0)),
]

contenedorHorasHtml.appendChild(arrDigitosHoras[0].crearHtml())
contenedorHorasHtml.appendChild(arrDigitosHoras[1].crearHtml())

const arrDigitosMinutos = [
  new Digito(obtenerDigito(minutosActuales, 1)),
  new Digito(obtenerDigito(minutosActuales, 0)),
]

contenedorMinutosHtml.appendChild(arrDigitosMinutos[0].crearHtml())
contenedorMinutosHtml.appendChild(arrDigitosMinutos[1].crearHtml())

const arrDigitosSegundos = [
  new Digito(obtenerDigito(segundosActuales, 1)),
  new Digito(obtenerDigito(segundosActuales, 0)),
]

contenedorSegundosHtml.appendChild(arrDigitosSegundos[0].crearHtml())
contenedorSegundosHtml.appendChild(arrDigitosSegundos[1].crearHtml())

const tituloDiasHtml = document.getElementById('titulo-dias')

tituloDiasHtml.addEventListener('click', () => {
  modoContador++
  if (modoContador > 2) modoContador = 0

  // if (modoContador === 2) {
  //   timerParado = false
  // }

  if (modoContador === 0) {
    // && timerParado
    // timerParado = false
    paroDeTiempoHtml.innerText = ''
    obtenerTiempoRestante()
    actualizarContador()
  }
  let strTituloDias
  switch (modoContador) {
    case 0:
      strTituloDias = 'DIAS TOTALES'
      break

    case 1:
      strTituloDias = 'DIAS ESCOLARES'
      break

    case 2:
      strTituloDias = 'HORAS CLASE'
      break
  }
  tituloDiasHtml.innerText = strTituloDias
  soloDia = true
  obtenerTiempoRestante()
  soloDia = false

  arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
  arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))
})

cambiarSegundo()
