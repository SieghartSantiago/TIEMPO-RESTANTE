//* 28 de noviembre
const finClases = new Date(2025, 10, 28, 18, 10, 0)

const arrFeriados = [
  new Date(2025, 9, 10),
  new Date(2025, 10, 21),
  new Date(2025, 10, 24),
]
const arrJornadas = [new Date(2025, 9, 21), new Date(2025, 10, 26)]

arrFeriados.sort((a, b) => a - b)
arrJornadas.sort((a, b) => a - b)

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
    dia: new Date(2025, 9, 6),
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
    ],
  },
  {
    dia: new Date(2025, 9, 7),
    horario: [],
  },
  {
    dia: new Date(2025, 9, 8),
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
    dia: new Date(2025, 9, 15),
    horario: [
      {
        materia: 'Salida a MEGA',
        horarioComienzo: '07:00',
        horarioFin: '14:00',
      },
    ],
  },
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

cambioHorarioClases.forEach((dia) => {
  dia.horario.sort(
    (a, b) => aMinutos(a.horarioComienzo) - aMinutos(b.horarioComienzo)
  )
})

horarioClases.forEach((dia) => {
  dia.horario.sort(
    (a, b) => aMinutos(a.horarioComienzo) - aMinutos(b.horarioComienzo)
  )
})

const contenedorDiasHtml = document.getElementById('dias'),
  contenedorHorasHtml = document.getElementById('horas'),
  contenedorMinutosHtml = document.getElementById('minutos'),
  contenedorSegundosHtml = document.getElementById('segundos')

let diasActuales, horasActuales, minutosActuales, segundosActuales

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

function setDoubleDigitFavicon(leftDigit, rightDigit) {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')

  // Fondo negro con división central
  ctx.fillStyle = '#111'
  ctx.fillRect(0, 0, 64, 64)
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(32, 0)
  ctx.lineTo(32, 64)
  ctx.stroke()

  // Números rojos estilo digital
  ctx.fillStyle = '#f01515'
  ctx.font = 'bold 36px "Courier Prime", monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Izquierda
  ctx.fillText(leftDigit, 16, 34)
  // Derecha
  ctx.fillText(rightDigit, 48, 34)

  // Convertir a imagen y aplicar como favicon
  const faviconURL = canvas.toDataURL('image/png')
  let link = document.querySelector("link[rel*='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = faviconURL
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

  let horarioObj
  let clasesHoy

  const cambio = cambioHorarioClases.find(
    (c) =>
      c.dia.getDate() === ahora.getDate() &&
      c.dia.getMonth() === ahora.getMonth()
  )

  if (cambio) {
    horarioObj = cambio
    clasesHoy = horarioObj
  } else {
    horarioObj = horarioClases
    clasesHoy = horarioObj.find((d) => d.dia === dia)
  }

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

function obtenerTiempoRestante() {
  // if (timerParado) return
  const ahora = new Date()
  // const ahora = new Date(2025, 9, 10)

  let cantMs = finClases - ahora // diferencia en milisegundos

  if (cantMs < 0) cantMs = 0 // si ya pasó la fecha

  diasActuales = Math.floor(cantMs / (1000 * 60 * 60 * 24))
  cantMs -= diasActuales * (1000 * 60 * 60 * 24)

  horasActuales = Math.floor(cantMs / (1000 * 60 * 60))
  cantMs -= horasActuales * (1000 * 60 * 60)

  minutosActuales = Math.floor(cantMs / (1000 * 60))
  cantMs -= minutosActuales * (1000 * 60)

  segundosActuales = Math.floor(cantMs / 1000)

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

      let strParoDeTiempo =
        hoyJornadaOFeriado === 1
          ? 'EN FERIADO'
          : hoyJornadaOFeriado === 2
          ? 'EN JORNADA'
          : 'EN FIN DE SEMANA'

      if (paroDeTiempoHtml.innerText !== strParoDeTiempo)
        paroDeTiempoHtml.innerText = strParoDeTiempo

      arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
      arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

      arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
      arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

      arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
      arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))
    }
  } else if (modoContador === 2) {
    let ahora = new Date()
    let totalMsClases = 0

    // Iterar desde hoy hasta finClases (día por día)
    let diaIter = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      ahora.getDate()
    )

    while (diaIter <= finClases) {
      const diaSemana = diaIter.getDay() // 0 = domingo, 6 = sábado
      const esFeriadoOJornada = comprobarSiEsFeriadoOJornada(diaIter)

      // Saltar fines de semana, feriados y jornadas
      if (diaSemana === 0 || diaSemana === 6 || esFeriadoOJornada > 0) {
        diaIter.setDate(diaIter.getDate() + 1)
        continue
      }

      // Buscar si hay un cambio de horario en este día
      const cambio = cambioHorarioClases.find(
        (c) =>
          c.dia.getDate() === diaIter.getDate() &&
          c.dia.getMonth() === diaIter.getMonth()
      )

      // Obtener el horario que corresponda
      let horarioDia
      if (cambio) {
        horarioDia = cambio.horario
      } else {
        horarioDia = horarioClases[diaSemana].horario
      }

      // Verificar miércoles con taller (semana por medio)
      if (diaSemana === 3) {
        horarioDia = horarioDia.filter((h) => {
          if (h.semanaPorMedio === undefined) return true
          return esMiercolesConTaller(diaIter)
        })
      }

      // Sumar tiempo de clases de ese día
      for (const materia of horarioDia) {
        let inicio = aMinutos(materia.horarioComienzo) * 60 * 1000
        let fin = aMinutos(materia.horarioFin) * 60 * 1000

        // Si es hoy, descontar tiempo ya pasado
        if (
          diaIter.getDate() === ahora.getDate() &&
          diaIter.getMonth() === ahora.getMonth()
        ) {
          const msAhora =
            (ahora.getHours() * 60 * 60 +
              ahora.getMinutes() * 60 +
              ahora.getSeconds()) *
            1000
          if (msAhora >= fin) continue // ya terminó
          if (msAhora > inicio) inicio = msAhora // ya empezó, cortar desde ahora
        }

        // Si es el último día (finClases), cortar el final si es antes
        if (
          diaIter.getDate() === finClases.getDate() &&
          diaIter.getMonth() === finClases.getMonth()
        ) {
          const msFin =
            (finClases.getHours() * 60 * 60 +
              finClases.getMinutes() * 60 +
              finClases.getSeconds()) *
            1000
          if (msFin <= inicio) continue
          if (msFin < fin) fin = msFin
        }

        totalMsClases += fin - inicio
      }

      diaIter.setDate(diaIter.getDate() + 1)
    }

    // Convertir total a días/horas/minutos/segundos
    let ms = totalMsClases

    diasActuales = Math.floor(ms / (1000 * 60 * 60 * 24))
    ms -= diasActuales * 1000 * 60 * 60 * 24

    horasActuales = Math.floor(ms / (1000 * 60 * 60))
    ms -= horasActuales * 1000 * 60 * 60

    minutosActuales = Math.floor(ms / (1000 * 60))
    ms -= minutosActuales * 1000 * 60

    segundosActuales = Math.floor(ms / 1000)
  }

  if (
    (finClases.getHours() > 0 ||
      finClases.getMinutes() > 0 ||
      finClases.getSeconds() > 0) &&
    modoContador !== 2
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

  arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
  arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

  arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
  arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

  arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
  arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))

  arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
  arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))

  if (modoContador === 2) {
    const materiaAct = materiaActual()

    let strParoDeTiempo

    if (!materiaAct) {
      strParoDeTiempo = 'SIN CLASES'
    } else {
      strParoDeTiempo = `EN ${materiaAct.materia.toUpperCase()}`
    }

    if (paroDeTiempoHtml.innerText !== strParoDeTiempo)
      paroDeTiempoHtml.innerText = strParoDeTiempo
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

  let numIzq, numDer

  if (diasActuales > 0) {
    numIzq = obtenerDigito(diasActuales, 1)
    numDer = obtenerDigito(diasActuales, 0)
  } else if (horasActuales > 0) {
    numIzq = obtenerDigito(horasActuales, 1)
    numDer = obtenerDigito(horasActuales, 0)
  } else if (minutosActuales > 0) {
    numIzq = obtenerDigito(minutosActuales, 1)
    numDer = obtenerDigito(minutosActuales, 0)
  } else {
    numIzq = obtenerDigito(segundosActuales, 1)
    numDer = obtenerDigito(segundosActuales, 0)
  }

  setDoubleDigitFavicon(numIzq, numDer)
}

obtenerTiempoRestante()

const tituloDiasHtml = document.getElementById('titulo-dias')

tituloDiasHtml.addEventListener('click', () => {
  modoContador++
  if (modoContador > 2) modoContador = 0

  if (modoContador === 0) {
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
      strTituloDias = 'DIAS CLASE'
      break
  }
  if (tituloDiasHtml.innerText !== strTituloDias)
    tituloDiasHtml.innerText = strTituloDias
  soloDia = true
  obtenerTiempoRestante()
  soloDia = false

  arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
  arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))
})

cambiarSegundo()
