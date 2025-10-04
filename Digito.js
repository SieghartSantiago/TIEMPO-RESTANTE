class Digito {
  constructor(numInicial) {
    this.numActual = numInicial

    this.caja1Html
    this.caja2Html

    this.enAnimacion = false
    this.dActual = false
  }

  crearHtml() {
    const caja1Html = document.createElement('div')
    caja1Html.classList.add('digito', 'digitoPreparado')

    this.caja1Html = caja1Html

    const caja2Html = document.createElement('div')
    caja2Html.classList.add('digito', 'digitoActual')
    caja2Html.innerText = this.numActual

    this.caja2Html = caja2Html

    const contenedorHtml = document.createElement('div')
    contenedorHtml.classList.add('contenedor-digito')
    contenedorHtml.appendChild(this.caja1Html)
    contenedorHtml.appendChild(this.caja2Html)
    return contenedorHtml
  }

  cambio(numSiguiente) {
    if (this.enAnimacion || this.numActual === numSiguiente) return false

    const digitoPorPoner = !this.dActual ? this.caja1Html : this.caja2Html

    digitoPorPoner.innerText = numSiguiente

    this.enAnimacion = true

    this.caja1Html.classList.remove(
      !this.dActual ? 'digitoPreparado' : 'digitoActual'
    )
    this.caja1Html.classList.add(
      !this.dActual ? 'digitoActual' : 'digitoAfuera'
    )
    this.caja2Html.classList.remove(
      this.dActual ? 'digitoPreparado' : 'digitoActual'
    )
    this.caja2Html.classList.add(this.dActual ? 'digitoActual' : 'digitoAfuera')

    setTimeout(() => {
      const digitoFuera = this.dActual ? this.caja1Html : this.caja2Html

      digitoFuera.classList.remove('digitoAfuera')
      digitoFuera.classList.add('digitoPreparado')

      this.numActual = numSiguiente

      digitoFuera.innerText = numSiguiente

      this.dActual = !this.dActual

      this.enAnimacion = false
    }, 500)

    return true
  }
}
