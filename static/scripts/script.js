$(document).ready(function () {
	console.log('█▀▀ █▀█ █▄ █ █▀ █▀█ █   █▀▀   ▀▀ ▀▄\n█▄▄ █▄█ █ ▀█ ▄█ █▄█ █▄▄ ██▄   ▀▀ ▄▀');

	var turn = 'X';
	var check;
	var board = ['', '', '', '', '', '', '', '', ''];
	var turns = 0;

	$('button').click(function () {
		if ($(this).attr('id') != 'r') {
			if ($(this).html() !== '' && $(this).attr('id') !== 'r') {
				alert("You can't do this!");
				return;
			}
			$(this).html(turn);
			board[$(this).attr('id')] = turn;
			turns++;

			if (
				(board[0] === turn && board[3] === turn && board[6] === turn) ||
				(board[1] === turn && board[4] === turn && board[7] === turn) ||
				(board[2] === turn && board[5] === turn && board[8] === turn) ||
				(board[0] === turn && board[1] === turn && board[2] === turn) ||
				(board[3] === turn && board[4] === turn && board[5] === turn) ||
				(board[6] === turn && board[7] === turn && board[8] === turn) ||
				(board[0] === turn && board[4] === turn && board[8] === turn) ||
				(board[2] === turn && board[4] === turn && board[6] === turn)
			) {
				$('.winner').html('Player ' + turn + ' wins!');
				$('.win-screen').show('block');
				turns = 0;
				return;
			}
			if(turns===9){
				$('.winner').html('Draw!');
				$('.win-screen').show('block');
				turns = 0;
				return;
			}
			turn = turn === 'X' ? '0' : 'X';
			$('.turn').html('Player ' + turn + "'s turn");
		} else {
			for (let index = 0; index < board.length; index++) {
				board[index] = '';
			}
			for (let index = 0; index < board.length; index++) {
				$('#' + index).html('');
			}
			turn = 'X';
			$('.turn').html("Player X's turn");
			$('.win-screen').hide('block');
		}
	});
});