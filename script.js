// const contenedorDiasHtml = document.getElementById('dias')

// const arrDigitos = [new Digito(5, 4), new Digito(0, 9)]

// contenedorDiasHtml.appendChild(arrDigitos[0].crearHtml())
// contenedorDiasHtml.appendChild(arrDigitos[1].crearHtml())

// setInterval(() => {
//     const numSiguiente = arrDigitos[1].numSiguiente
//     if (numSiguiente === 9) {
//         arrDigitos[0].cambio(arrDigitos[0].numSiguiente - 1)
//         arrDigitos[1].cambio(8)
//     } else {
//         arrDigitos[1].cambio(numSiguiente - 1 < 0 ? 9 : numSiguiente - 1)
//     }
// }, 1000);

const arrFeriados = [
  new Date(2025, 9, 10),
  new Date(2025, 10, 21),
  new Date(2025, 10, 24),
]
const arrJornadas = [new Date(2025, 9, 21), new Date(2025, 10, 26)]

let soloDia = false
let estaDiasTotales = true
let timerParado = false

// function onSecondChange(callback) {
//   let stopped = false

//   function scheduleNext() {
//     if (stopped) return
//     const now = new Date()
//     const msToNextSecond = 1000 - now.getMilliseconds()

//     setTimeout(() => {
//       if (stopped) return
//       const tick = new Date()
//       // llamamos con la hora actual (ya cambió el segundero)
//       callback(tick)
//       // recalculamos para mantener sincronía y evitar drift
//       scheduleNext()
//     }, msToNextSecond)
//   }

//   scheduleNext()

//   return {
//     stop() {
//       stopped = true
//     },
//   }
// }

function diasEnUnMes(año, mes) {
  // Los meses en JavaScript son de base cero (0 = enero, 1 = febrero, etc.)
  // Por lo tanto, para obtener el último día del mes, pasamos el mes siguiente y el día 0.
  // Por ejemplo, para marzo (mes 2), pasamos un 0 con el mes de abril (mes 3).
  return new Date(año, mes + 1, 0).getDate()
}

let diasActuales, horasActuales, minutosActuales, segundosActuales

//* 21 de noviembre
const finClases = new Date(2025, 10, 28, 0, 0, 0, 0)

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
  if (timerParado) return
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

  if (!estaDiasTotales) {
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

    diasActuales -= arrJornadas.length
    diasActuales -= arrFeriados.length

    let hoyJornadaOFeriado = comprobarSiEsFeriadoOJornada(ahora)

    if (
      ahora.getDay() === 0 ||
      ahora.getDay() === 6 ||
      hoyJornadaOFeriado > 0
    ) {
      horasActuales = 0
      minutosActuales = 0
      segundosActuales = 0
      paroDeTiempoHtml.innerText =
        hoyJornadaOFeriado === 1
          ? 'En feriado'
          : hoyJornadaOFeriado === 2
          ? 'En jornada'
          : 'En fin de semana'

      arrDigitosSegundos[0].cambio(obtenerDigito(segundosActuales, 1))
      arrDigitosSegundos[1].cambio(obtenerDigito(segundosActuales, 0))

      arrDigitosMinutos[0].cambio(obtenerDigito(minutosActuales, 1))
      arrDigitosMinutos[1].cambio(obtenerDigito(minutosActuales, 0))

      arrDigitosHoras[0].cambio(obtenerDigito(horasActuales, 1))
      arrDigitosHoras[1].cambio(obtenerDigito(horasActuales, 0))

      timerParado = true
    }
  }
}

// obtenerTiempoRestante() // cálculo inicial
// const ticker = onSecondChange(() => {
//   obtenerTiempoRestante()
//   actualizarContador()
// })

function cambiarSegundo() {
  obtenerTiempoRestante()
  actualizarContador()
  setTimeout(() => {
    cambiarSegundo()
  }, 100)
}

// diasActuales = 1
// horasActuales = 0
// minutosActuales = 0
// segundosActuales = 5

function obtenerDigito(num, digito) {
  if (digito === 1) return Math.trunc(num / 10) % 10
  return num % 10
}

const contenedorDiasHtml = document.getElementById('dias'),
  contenedorHorasHtml = document.getElementById('horas'),
  contenedorMinutosHtml = document.getElementById('minutos'),
  contenedorSegundosHtml = document.getElementById('segundos')

function actualizarContador() {
  if (comprobarSiEsFeriadoOJornada(new Date()) > 0 && !estaDiasTotales) return

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
  new Digito(
    obtenerDigito(diasActuales, 1),
    obtenerDigito(diasActuales, 1) === 0
      ? 9
      : obtenerDigito(diasActuales, 1) - 1
  ),
  new Digito(
    obtenerDigito(diasActuales, 0),
    obtenerDigito(diasActuales, 0) === 0
      ? 9
      : obtenerDigito(diasActuales, 0) - 1
  ),
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
  estaDiasTotales = !estaDiasTotales
  if (estaDiasTotales && timerParado) {
    timerParado = false
    paroDeTiempoHtml.innerText = ''
    obtenerTiempoRestante()
    actualizarContador()
  }
  tituloDiasHtml.innerText = estaDiasTotales ? 'DIAS TOTALES' : 'DIAS ESCOLARES'
  soloDia = true
  obtenerTiempoRestante()
  soloDia = false

  arrDigitosDias[0].cambio(obtenerDigito(diasActuales, 1))
  arrDigitosDias[1].cambio(obtenerDigito(diasActuales, 0))
})

cambiarSegundo()
