function PuzzleCard({ puzzle, onSelect }) {
    return (
        <div 
            className="border rounded-md p-4 shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => onSelect(puzzle.id)}
        >
            <h3 className="text-lg font-semibold mb-2">{puzzle.title}</h3>
            <p className="text-gray-600">{puzzle.description}</p>
        </div>
    )
}

export default PuzzleCard