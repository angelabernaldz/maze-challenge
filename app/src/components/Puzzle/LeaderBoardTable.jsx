function LeaderBoardTable({ puzzle }) {

  return (
    <div className="w-full border rounded-lg p-2 shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-3 text-center">{puzzle.puzzle_title}</h2>
      <table className="table-auto w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b px-2 py-1 text-left">User</th>
            <th className="border-b px-2 py-1 text-center">🟢 Attempts</th>
            <th className="border-b px-2 py-1 text-center">✅ Success</th>
            <th className="border-b px-2 py-1 text-center">❌ Fails</th>
          </tr>
        </thead>
        <tbody>
          {puzzle.users.map((user, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <td className="px-2 py-1 font-medium">{user.username}</td>
              <td className="px-2 py-1 text-center">{user.attempts}</td>
              <td className="px-2 py-1 text-center">{user.success}</td>
              <td className="px-2 py-1 text-center">{user.fails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoardTable