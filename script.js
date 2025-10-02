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

let soloDia = false
let estaDiasTotales = true

function onSecondChange(callback) {
  let stopped = false

  function scheduleNext() {
    if (stopped) return
    const now = new Date()
    const msToNextSecond = 1000 - now.getMilliseconds()

    setTimeout(() => {
      if (stopped) return
      const tick = new Date()
      // llamamos con la hora actual (ya cambió el segundero)
      callback(tick)
      // recalculamos para mantener sincronía y evitar drift
      scheduleNext()
    }, msToNextSecond)
  }

  scheduleNext()

  return {
    stop() {
      stopped = true
    },
  }
}

function diasEnUnMes(año, mes) {
  // Los meses en JavaScript son de base cero (0 = enero, 1 = febrero, etc.)
  // Por lo tanto, para obtener el último día del mes, pasamos el mes siguiente y el día 0.
  // Por ejemplo, para marzo (mes 2), pasamos un 0 con el mes de abril (mes 3).
  return new Date(año, mes + 1, 0).getDate()
}

let diasActuales,
  horasActuales,
  minutosActuales,
  segundosActuales,
  diasActualesTotales

//* 21 de noviembre
const finClases = new Date(2025, 10, 21, 0, 0, 0, 0)

document.getElementById(
  'fecha-final'
).innerText = `${finClases.toLocaleDateString()} ${finClases.getHours()}:${finClases.getMinutes()}:${finClases.getSeconds()}`

function obtenerTiempoRestante() {
  const ahora = new Date()

  diasActuales = 0

  for (let i = 0; i < finClases.getMonth() - ahora.getMonth() + 1; i++) {
    if (finClases.getMonth() === ahora.getMonth()) {
      diasActuales = finClases.getDate() - ahora.getDate() - 1
      break
    }
    if (i === 0) {
      diasActuales += diasEnUnMes(2025, ahora.getMonth()) - ahora.getDate()
    } else if (i === finClases.getMonth() - ahora.getMonth()) {
      diasActuales += finClases.getDate()
    } else {
      diasActuales += diasEnUnMes(2025, ahora.getMonth() + i)
    }
  }

  diasActualesTotales = diasActuales

  if (!soloDia) {
    if (
      finClases.getSeconds() === 0 &&
      finClases.getMinutes() === 0 &&
      finClases.getHours() === 0
    ) {
      horasActuales = 23 - ahora.getHours()
      minutosActuales = 59 - ahora.getMinutes()
      segundosActuales = 60 - ahora.getSeconds()
    } else {
      let diffMs = finClases - ahora - diasActualesTotales * 24 * 60 * 60 * 1000
      if (diffMs < 0) diffMs = 0 // por si ya pasó la fecha

      horasActuales = Math.floor(diffMs / (1000 * 60 * 60))
      diffMs -= horasActuales * (1000 * 60 * 60)

      if (horasActuales === 24) {
        horasActuales = 0
        diasActualesTotales++
        diasActuales++
      }

      minutosActuales = Math.floor(diffMs / (1000 * 60))
      diffMs -= minutosActuales * (1000 * 60)

      segundosActuales = Math.floor(diffMs / 1000)
    }
  }

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
  }
}

obtenerTiempoRestante() // cálculo inicial
const ticker = onSecondChange(() => {
  obtenerTiempoRestante()
  actualizarContador()
})

// diasActuales = 1
// horasActuales = 0
// minutosActuales = 0
// segundosActuales = 5

function obtenerDigito(num, digito) {
  if (digito === 1) return Math.trunc(num / 10) % 10
  return num % 10
}

function cambioDigito(claseDigito, digito, reinicio, cambioNum = false) {
  const sigNum = digito - 1 < 0 ? reinicio : digito - 1
  if (cambioNum) {
    claseDigito.numSiguiente = sigNum
    if (!claseDigito.dActual) {
      claseDigito.caja1Html.innerText = digito
    } else {
      claseDigito.caja2Html.innerText = digito
    }
    claseDigito.cambio(sigNum)
  }
  if (claseDigito.numSiguiente !== sigNum) {
    claseDigito.cambio(sigNum)
  }
}

const contenedorDiasHtml = document.getElementById('dias'),
  contenedorHorasHtml = document.getElementById('horas'),
  contenedorMinutosHtml = document.getElementById('minutos'),
  contenedorSegundosHtml = document.getElementById('segundos')

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
  new Digito(
    obtenerDigito(horasActuales, 1),
    obtenerDigito(horasActuales, 1) === 0
      ? 2
      : obtenerDigito(horasActuales, 1) - 1
  ),
  new Digito(
    obtenerDigito(horasActuales, 0),
    obtenerDigito(horasActuales, 0) === 0
      ? obtenerDigito(horasActuales, 1) > 0
        ? 9
        : 3
      : obtenerDigito(horasActuales, 0) - 1
  ),
]

contenedorHorasHtml.appendChild(arrDigitosHoras[0].crearHtml())
contenedorHorasHtml.appendChild(arrDigitosHoras[1].crearHtml())

const arrDigitosMinutos = [
  new Digito(
    obtenerDigito(minutosActuales, 1),
    obtenerDigito(minutosActuales, 1) === 0
      ? 5
      : obtenerDigito(minutosActuales, 1) - 1
  ),
  new Digito(
    obtenerDigito(minutosActuales, 0),
    obtenerDigito(minutosActuales, 0) === 0
      ? 9
      : obtenerDigito(minutosActuales, 0) - 1
  ),
]

contenedorMinutosHtml.appendChild(arrDigitosMinutos[0].crearHtml())
contenedorMinutosHtml.appendChild(arrDigitosMinutos[1].crearHtml())

const arrDigitosSegundos = [
  new Digito(
    obtenerDigito(segundosActuales, 1),
    obtenerDigito(segundosActuales, 1) === 0
      ? 5
      : obtenerDigito(segundosActuales, 1) - 1
  ),
  new Digito(
    obtenerDigito(segundosActuales, 0),
    obtenerDigito(segundosActuales, 0) === 0
      ? 9
      : obtenerDigito(segundosActuales, 0) - 1
  ),
]

contenedorSegundosHtml.appendChild(arrDigitosSegundos[0].crearHtml())
contenedorSegundosHtml.appendChild(arrDigitosSegundos[1].crearHtml())

function actualizarContador() {
  cambioDigito(arrDigitosSegundos[0], obtenerDigito(segundosActuales, 1), 5)
  cambioDigito(arrDigitosSegundos[1], obtenerDigito(segundosActuales, 0), 9)

  cambioDigito(arrDigitosMinutos[0], obtenerDigito(minutosActuales, 1), 5)
  cambioDigito(arrDigitosMinutos[1], obtenerDigito(minutosActuales, 0), 9)

  cambioDigito(arrDigitosHoras[0], obtenerDigito(horasActuales, 1), 2)
  cambioDigito(
    arrDigitosHoras[1],
    obtenerDigito(horasActuales, 0),
    obtenerDigito(horasActuales, 1) > 0 ? 9 : 3
  )

  cambioDigito(arrDigitosDias[0], obtenerDigito(diasActuales, 1), 9)
  cambioDigito(arrDigitosDias[1], obtenerDigito(diasActuales, 0), 9)
}

const tituloDiasHtml = document.getElementById('titulo-dias')

tituloDiasHtml.addEventListener('click', () => {
  estaDiasTotales = !estaDiasTotales
  tituloDiasHtml.innerText = estaDiasTotales ? 'DIAS TOTALES' : 'DIAS ESCOLARES'
  soloDia = true
  obtenerTiempoRestante()
  soloDia = false
  cambioDigito(arrDigitosDias[0], obtenerDigito(diasActuales, 1), 9, true)
  cambioDigito(arrDigitosDias[1], obtenerDigito(diasActuales, 0), 9, true)
})
