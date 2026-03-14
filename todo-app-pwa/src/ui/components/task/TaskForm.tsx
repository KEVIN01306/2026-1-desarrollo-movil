
export default function TaskForm() {
  return (
    <form className="w-full flex flex-row gap-4">
      <input
        type="text"
        placeholder="Detalle de tarea"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
      >
        Guardar
      </button>
    </form>
  )
}