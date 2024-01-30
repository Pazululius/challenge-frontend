export async function handleResponse(response) {
  try {
    const json = await response.json();
    return { data: [...json], ok: response.ok };
  } catch {
    return { mensaje: `Ocurrio un error ${response.status}`, ok: response.ok };
  }
}
export function handleError(error) {
  return {
    error: error,
    mensaje: "Hubo un error al conectarse al servidor",
    ok: false,
  };
}
