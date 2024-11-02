import Papa from 'papaparse'

interface Response {
  nombre: string
  precio: number | string
  stock: number | string
  foto: string | any
}

export async function getProducts() {
  try {
    const res = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXMxyr0q3NFTcXU0jDiSGtE9vw8dQNGSFXhz8RTzWMsl5Dx86nJC_1x6jcMdCPU4Hv0O-C-X2CBc_8/pub?gid=0&single=true&output=csv'
    )
    const data = await res.text()
    const parsed = await new Promise<Response[]>((resolve, reject) => {
      Papa.parse<Response>(data, {
        complete: result => resolve(result.data),
        error: reject,
        header: true,
      })
    })
    return parsed
  } catch (error) {
    console.log(error)
  }
}
