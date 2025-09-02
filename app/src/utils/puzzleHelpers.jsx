export function moveToArrow(move) {
  switch(move) {
    case "up": return "⬆️"
    case "down": return "⬇️"
    case "left": return "⬅️"
    case "right": return "➡️"
    default: return "?"
  }
}

export function cellColor(cell) {
    switch(cell) {
      case "S": return "#4ade80"   // green start
      case "E": return "#f87171"   // red exit
      case "K": return "#facc15"   // yellow key
      case "D": return "#60a5fa"   // blue door
      case "P1":
      case "P2": return "#a78bfa"  // purple portals
      case "#": return "#333"      // wall
      case ".": return "#fff"      // empty
      default: return "#fff"
    }
}