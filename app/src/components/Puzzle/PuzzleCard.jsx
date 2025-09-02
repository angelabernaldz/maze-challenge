function PuzzleCard({ puzzle, onSelect }) {
    return (
    <div 
        className="bg-white w-full rounded-2xl p-6 cursor-pointer 
                hover:shadow-xl hover:border hover:border-gray-300 transition"
        onClick={() => onSelect(puzzle.id)}
    >
        <h3 className="text-3xl font-semibold mb-2">{puzzle.title}</h3>
        <p className="text-gray-600 text-xl">{puzzle.description}</p>
    </div>
    )
}

export default PuzzleCard