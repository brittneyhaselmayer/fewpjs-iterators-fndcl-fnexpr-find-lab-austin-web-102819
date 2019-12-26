const testVar = {}

function testFunc() {
  return "hi"
}


// function superbowlWin(record){
//   record.find(function(record){
//     if record.result === "W"
//     return record.year

//     else 
//     return undefined
//   })
// }



superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined}