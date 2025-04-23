// Interfaz para la respuesta de la API
export interface TicketSalesResponse {
  lawallet: number
  crypta: number
}

// Función para obtener las ventas de tickets
export async function getTicketSales(): Promise<TicketSalesResponse> {
  try {
    // En un entorno real, esta sería la URL de tu API
    const response = await fetch("https://api.lacrypta.com.ar/tickets/sales")

    if (!response.ok) {
      throw new Error("Error al obtener datos de ventas")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching ticket sales:", error)
    // Valores por defecto en caso de error
    return {
      lawallet: 14,
      crypta: 8,
    }
  }
}
