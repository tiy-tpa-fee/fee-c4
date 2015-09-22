# Multiplayer Tic-Tac-Toe

## Description

Your task is to work with your team (comprised of both the frontend and backend students) to build a tic-tac-toe game that lets players play over the network from two different browsers.

### Explorer Mode

The front end should prompt the user for their name and either assign them X or O, or let the player choose. This is up to you.

The backend doesn't need to manage multiple games at once (so yes, if more than two people try connecting to it, it will probably get confusing).

Use all the tools you've learned up to now!

### Adventure Mode

Games have a unique ID, the backend can track multiple games. You will have to modify the API to include the game's unique identifier so that it can figure out which game to operate on.

This could be tricksy!

## Deliverables

- [ ] Backend: A link to a single repository with commits from all backend team members

- [ ] Frontend: A link to a single repository with commits from all frontend team members


## API

This is a suggested API, you may find that something else works better for you. It may also not be entirely complete, you will likely need to add additional methods to complete the game.

### `POST /game`

#### Behavior

Creates a new game with a blank board.

#### Request:

```json
{
  "player_X_name": "String containing the name of player X",
  "player_O_name": "String containing the name of player O"
}
```

#### Response:

Status code: `201`

Body:

```json
{
 "status": "ok",
 "board": { "state": "playing",
            "positions": { "0": " ",
                           "1": " ",
                           "2": " ",
                           "3": " ",
                           "4": " ",
                           "5": " ",
                           "6": " ",
                           "7": " ",
                           "8": " "
                         }     
         }
}
```

### `POST /move`

#### Behavior

Makes a move for a specific player

#### Request:

##### Examples

> X player moves to position 0  

Request:

```json
{
  "player": "X",
  "position": "0"
}
```

Response:

```json
{
 "status": "ok",
 "board": { "state": "playing",
            "positions": { "0": "X",
                           "1": " ",
                           "2": " ",
                           "3": " ",
                           "4": " ",
                           "5": " ",
                           "6": " ",
                           "7": " ",
                           "8": " "
                         }     
         }
}
```

> O player moves to position 4

Request:

```json
 {
   "player": "O",
   "position": "4"
 }
```

   Response:
```json
 {
   "status": "ok",
   "board": { "state": "playing",
              "positions": { "0": "X",
                             "1": " ",
                             "2": " ",
                             "3": " ",
                             "4": "O",
                             "5": " ",
                             "6": " ",
                             "7": " ",
                             "8": " "
                           }     
           }
 }
```

> X player moves to position 3

Request:

```json
{
  "player": "X",
  "position": "3"
}
```

Response:

```json
   {
     "status": "ok",
     "board": { "state": "playing",
                "positions": { "0": "X",
                               "1": " ",
                               "2": " ",
                               "3": "X",
                               "4": "O",
                               "5": " ",
                               "6": " ",
                               "7": " ",
                               "8": " "
                             }     
             }
   }
```

- NOTE: The value for `player` is either an `"X"` or an `"O"`.
- NOTE: The value for "position" is a `"0"`, `"1"`, `"2"` , `"3"`, `"4"`, `"5"`, `"6"`, `"7"`, or `"8"`

#### Response:

##### If the move is valid (the space is currently _unoccupied_)

Status code: `200`

 Body:

```json
 {
   "status": "ok",
   "board": { "state": "playing",
              "positions": { "0": " ",
                             "1": " ",
                             "2": " ",
                             "3": " ",
                             "4": " ",
                             "5": " ",
                             "6": " ",
                             "7": " ",
                             "8": " "
                           }     
           }
 }
```

- NOTE: The board should be updated with an `X` or an `O` depending on which player made the move.
- NOTE: The `state` should be updated with one of these values:
  - `playing` - the game is ongoing
  - `tie` - the game is a tie
  - `player X wins` - player X has won
  - `player Y wins` - player Y has won

##### If the move is invalid (the space is currently _occupied_)

Status code: `409`

```json
 {
   "status": "invalid",
   "reason": "Already an (X or O) at this space",
   "board": { "state": "playing",
              "positions": { "0": " ",
                             "1": " ",
                             "2": " ",
                             "3": " ",
                             "4": " ",
                             "5": " ",
                             "6": " ",
                             "7": " ",
                             "8": " "
                           }     
           }
 }
```

- NOTE: The `reason` should say either "Already an X at this space" or "Already an O at this space"
- NOTE: The board should be the previous board state _without_ the requested move

# Resources
Test your API responses locally: (if running `Sinatra`)

brew install httpie

`http http://localhost:4567/game player_X_name=Gavin player_O_name=Jason --form`
