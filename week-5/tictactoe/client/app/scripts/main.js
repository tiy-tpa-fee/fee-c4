// const API_ROOT = "http://192.168.128.231:4567";
const API_ROOT = 'http://localhost:4567';

var player;
var currentPlayer;

$(function() {
  var updateBoard = function(board) {
    currentPlayer = board.current_player;
    switch (board.state) {
      case 'playing':
        if (player) {
          $('.modal').hide();
          $('.actionMsg').text('Current Player is ' + currentPlayer);
        } else {
          $('.modal').show();
        }

        break;
      case 'new':
        $('.actionMsg').text("Let's get ready to play!");
        $('.modal').show();
        break;
      case 'x wins':
        $('.actionMsg').text(board.players['x'] + " is the winner!");
        $('.modal').hide();
        break;
      case 'o wins':
        $('.actionMsg').text(board.players['o'] + " is the winner!");
        $('.modal').hide();
        break;
    }
    $('.players .X').text(board.players['x']);
    $('.players .O').text(board.players['o']);

    $('.hero-unit .row .column').each(function(i) {
      $(this).text(board.positions[i])
    });
  }

  $('form.setup').on('submit', function(event) {
    event.preventDefault();
    player = $('input[name=player]:checked').val();
    $('.modal').hide();
    $.ajax({
      type: 'PUT',
      url: API_ROOT + '/game',
      data: $(this).serialize()
    }).done(function(data) {
      console.log(data);
      updateBoard(data.board);
    }).error(function(xhr) {
      $('.modal').show();
      $('.modal .dialog .message').text('there was an error')
    });
  });

  $('button[name=reset]').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: API_ROOT + '/game'
    }).done(function(data) {
      updateBoard(data.board);
    });
  });

  $('.column').on('click', function() {
    if (player === currentPlayer) {
      $(this).text(player);
      $.ajax({
        type: 'POST',
        url: API_ROOT + '/move',
        data: {
          player: player,
          position: $(this).data('position')
        }
      }).done(function(data) {
        updateBoard(data.board);
      }).error(function(xhr) {
        $('.actionMsg').text('there was an error')
      });
    }
  });

  setInterval(function() {
    $.ajax({
      type: 'GET',
      url: API_ROOT + '/game'
    }).done(function(data) {
      updateBoard(data.board);
    }).error(function(xhr) {
      $('.actionMsg').text('there was an error')
    });
  }, 1000);
});
