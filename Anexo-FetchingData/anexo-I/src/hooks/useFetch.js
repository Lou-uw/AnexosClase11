import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(Boolean(url))
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return   // sin url no se pide nada

    let cancelado = false

    async function traer() {
      try {
        setCargando(true)
        setError(null)
        setDatos(null)

        const respuesta = await fetch(url)
        if (!respuesta.ok) {
          throw new Error(`El servidor respondió ${respuesta.status}`)
        }

        const json = await respuesta.json()
        if (!cancelado) setDatos(json)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    traer()

    return () => {
      cancelado = true   // si cambia la url, el pedido viejo se descarta
    }
  }, [url])

  return { datos, cargando, error }
}
