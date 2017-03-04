 
var WIN_COMBINATIONS  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
 var turn=0;
 $(function () {

 attachListeners()

})

 attachListeners=()=>{

 	$('table tr').forEach(tr=>{

 		tr.forEach(td=>{
 			td.on('click',(e)=>{
              doTurn(e)
 			})
 		})
 	})
 }

 doTurn=(e)=>{
	  turn++;
	  updateState(e)
	  checkWinner()

 }
 updateState=(e)=>{e.target.val(player())}
 player=()=>{return turn %2===0 ? "X" : "O"}

 checkWinner=()=>{
    WIN_COMBINATIONS.forEach((e)=>{
 //	return @board[e[0]] == @board[e[1]] &&  @board[e[1]] == @board[e[2]] })//&&  position_taken?( e[0])
 }