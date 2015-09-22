require 'json'
require 'sinatra'
require 'sinatra/reloader' if development?

set :bind, '0.0.0.0'

# Business Logic
class Board
  X = 'x'
  O = 'o'

  attr_accessor :positions, :winning_rows, :current_player,
                :player_x_name, :player_o_name

  def initialize
    self.positions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    self.winning_rows = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ]
    self.current_player = X
  end

  def winner_chicken_dinner(xo)
    @winning_rows.any? do |winning_row|
      winning_row.all? { |position| @positions[position - 1] == xo }
    end
  end

  def state
    if winner_chicken_dinner(X)
      return "#{X} wins"
    elsif winner_chicken_dinner(O)
      return "#{O} wins"
    elsif board_full?
      return 'tie'
    elsif [player_x_name, player_o_name].any?(&:nil?)
      return 'new'
    else
      return 'playing'
    end
  end

  def board_full?
    positions.all? { |position| position != ' ' }
  end

  def make_move(player, position)
    positions[position] = player

    if current_player == X
      self.current_player = O
    else
      self.current_player = X
    end
  end

  def to_hash
    {
      'state' => state,
      'positions' => positions,
      'current_player' => current_player,
      'players' => {
        X => player_x_name,
        O => player_o_name
      }
    }
  end
end

configure do
  set :board, Board.new
end

before do
  content_type 'application/json'
  headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  headers['Access-Control-Allow-Origin'] = '*'
end

def result_helper(board, status = 'ok')
  # puts board.to_hash
  {
    'status' => status,
    'board' => board.to_hash
  }
end

post '/game' do
  board = Board.new
  settings.board = board
  result = result_helper(board)

  status 201
  result.to_json
end

put '/game' do
  board = settings.board

  puts params.inspect

  case params['player']
  when Board::X
    board.player_x_name = params['name']
  when Board::O
    board.player_o_name = params['name']
  else
    result = result_helper(board, 'No Position')
  end

  result = result_helper(board)

  status 200
  result.to_json
end

get '/game' do
  board = settings.board
  result = result_helper(board)

  status 200
  result.to_json
end

post '/move' do
  board = settings.board
  player = params['player']
  position = params['position'].to_i

  board.make_move(player, position)
  result = result_helper(board)

  status 200
  result.to_json
end

options '/*' do
  status 200
end
