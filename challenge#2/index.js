//Object.keys() Object.values()
// Trial and failure for Graph search algorithm
let mock = {
  A: { B: 2, D: 5 },
  B: { C: 6 },
  C: { E: 3 },
  D: { E: 1 },
  E: {}
}
class Graph {
  constructor(graph) {
    this.graph = graph
    this.matrix = []
  }

  generateMatrix(n){
    let matrix = [], zeromatrix = []
    zeromatrix.length = n
    zeromatrix.fill(0)
    for (let i=0;i<n;i++)
      matrix.push(zeromatrix)
    return matrix
  }

  graphToMatrix() {
    let convert = (char) => { switch(char) { case 'A': return 0; break; case 'B': return 1; break; case 'C': return 2; break; case 'D': return 3; break; case 'E': return 4; break; }}
    let graph = this.graph, matrix = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    let column = Object.keys(graph)
    let corespondentNode = Object.values(graph).map(e => Object.keys(e))
    let corespondentNodeValues = Object.values(graph).map(e => Object.values(e))
    matrix = this.generateMatrix(corespondentNode.length)
    console.log(matrix)
    for (let i = 0; i < column.length; i++)
      if (corespondentNodeValues[i]) {
        corespondentNode[i].map((e, ind) => { matrix[i][convert(e)] = corespondentNodeValues[i][ind] })
      }
    // console.log(matrix)
  }
}



