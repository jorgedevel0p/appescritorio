import { DateTime } from 'luxon'

export function agregarProductosOrdenes(ordenes, productos) {
  const pedidosConProductos = ordenes.map(orden => {
    const detallesConProductos = orden.detalle_ordenes.map(detalle => {
      return {
        ...detalle,
        productoInfo: productos.find(producto => producto.id === detalle.producto)
      }
    })
    const ordenConProductos = {
      ...orden,
      detalle_ordenes: detallesConProductos
    }
    return ordenConProductos
  })
  return pedidosConProductos
}

export function filtrarOrdenesDelDia(ordenes){
  const today = DateTime.now()

  const ordenesDelDia = ordenes.filter(orden => {
    const ordenDate = DateTime.fromISO(orden.date)
    const isSameDay = ordenDate.hasSame(today, 'day')
    return isSameDay
  })

  return ordenesDelDia
}