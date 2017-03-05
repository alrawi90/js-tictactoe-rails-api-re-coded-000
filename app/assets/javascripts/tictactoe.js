var board=["","","","","","" ,"","",""]
var WIN_COMBINATIONS  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
 var turn=0;
 currentGame = 0;
 $(function () {

 attachListeners()

})

 var attachListeners=()=>{

 	$('table tr td').map((x,td)=>{
 			$(td).on('click',(e)=>{
 				
              doTurn(e)
 		})
 	})
 }

 var doTurn=(e)=>{
	  if($(e.target).text()==""){

		  
		  updateState(e)
		  updateBoard(e)
		  var thereIsWinner=checkWinner() 
		  !thereIsWinner ? turn++ :null

		  if(thereIsWinner===false && board.includes("")===false)  {message("Tie game") ;reset()}
		  else	{}

		  
		}

 }
 var reset=()=>{
    
 	turn=0;
 	board=["","","","","","" ,"","",""];
     $('table tr td').map((x,td)=>{
 			$(td).text("")
 				
 	})
 }
 var positionTaken=(position)=>{return board[position]=="X" || board[position]=="O"}
 var message=(m)=>{$('#message').text(m)}
 var updateState=(e)=>{$(e.target).text()=="" ? $(e.target).text(player()) : null}
 var player=()=>{return turn %2===0 ? "X" : "O"}

  var checkWinner=()=>{
     var won=false
     WIN_COMBINATIONS.forEach((e)=>{

  	if( board[e[0]] == board[e[1]] &&  board[e[1]] == board[e[2]] && positionTaken(e[0])) {
  		message(`Player ${player()} Won!`);
  		won=true
  		reset()
  	}
  })
     return won
}
var updateBoard=(e)=>{
	if($(e.target).attr('data-x')=="0" && $(e.target).attr('data-y')=="0") board[0]=player()
	else if($(e.target).attr('data-x')=="1" && $(e.target).attr('data-y')=="0") board[1]=player()
    else if($(e.target).attr('data-x')=="2" && $(e.target).attr('data-y')=="0") board[2]=player()
	else if($(e.target).attr('data-x')=="0" && $(e.target).attr('data-y')=="1") board[3]=player()
    else if($(e.target).attr('data-x')=="1" && $(e.target).attr('data-y')=="1") board[4]=player()
	else if($(e.target).attr('data-x')=="2" && $(e.target).attr('data-y')=="1") board[5]=player()
    else if($(e.target).attr('data-x')=="0" && $(e.target).attr('data-y')=="2") board[6]=player()
	else if($(e.target).attr('data-x')=="1" && $(e.target).attr('data-y')=="2") board[7]=player()
    else if($(e.target).attr('data-x')=="2" && $(e.target).attr('data-y')=="2") board[8]=player()
    console.log(board)	
}
