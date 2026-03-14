
export default function TaskItem() {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow">
      <div className="flex items-center">
        <span className="text-gray-800">Tarea de ejemplo</span>
      </div>
      <div className="flex flex-row gap-2">
          <button type="submit" className="bg-green-200 hover:bg-green-400 p-4 text-green-500 hover:text-green-700">Completada</button>
          <button className="bg-red-200 hover:bg-red-400 p-4 text-red-500 hover:text-red-700">Eliminar</button>
      </div>
    </div>
  )
}
