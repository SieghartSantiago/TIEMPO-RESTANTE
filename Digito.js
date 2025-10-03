class Digito {
  constructor(numInicial, numSiguiente) {
    this.numActual = numInicial
    this.numSiguiente = numSiguiente

    this.caja1Html
    this.caja2Html

    this.enAnimacion = false
    this.dActual = false
  }

  crearHtml() {
    const caja1Html = document.createElement('div')
    caja1Html.classList.add('digito', 'digitoPreparado')
    caja1Html.innerText = this.numSiguiente

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
    if (this.enAnimacion) return false

    this.enAnimacion = true

    this.caja1Html.classList.remove(
      !this.dActual ? 'digitoPreparado' : 'digitoActual'
    )
    this.caja1Html.classList.add(!this.dActual ? 'digitoActual' : 'digitoAfuera')
    this.caja2Html.classList.remove(
      this.dActual ? 'digitoPreparado' : 'digitoActual'
    )
    this.caja2Html.classList.add(this.dActual ? 'digitoActual' : 'digitoAfuera')

    setTimeout(() => {
      const digitoFuera = this.dActual ? this.caja1Html : this.caja2Html

      digitoFuera.classList.remove('digitoAfuera')
      digitoFuera.classList.add('digitoPreparado')

      this.numActual = this.numSiguiente
      this.numSiguiente = numSiguiente

      digitoFuera.innerText = this.numSiguiente

      this.dActual = !this.dActual

      this.enAnimacion = false
    }, 500)

    return true
  }
}
