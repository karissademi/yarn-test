function dirReduc(arr){
  var n = "NORTH";
  var s = "SOUTH";
  var e = "EAST";
  var w = "WEST";
  var shortest = true;
  for (var i = 0; i < arr.length; i++ ) {
    var current = arr[i];

    console.log(current);
    if ( current == arr[i+1] ) {
      arr.splice(i, 2);
      shortest = false;
      i = 0;
    }else if( ( current == n && arr[i+1] == s ) || ( current == s && arr[i+1] == n ) ){
      arr.splice( i, 2 );
      shortest = false;
      i = 0;
    }else if ( ( current == e && arr[i+1] == w ) || ( current == w && arr[i+1] == e ) ) {
      arr.splice( i, 2 );
      shortest = false;
      i = 0;
    }else{
      shortest = true;
    }
  }

  while ( shortest == false ){
    dirReduc(arr);
    i = 0;
  }
  console.log(arr);
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
//needs to match on two dirs that are the same
//match on 2 dirs that are opposites
//remove them from the array
//do it until there are no more dupes

function dirReducDos(arr){
  var n = "NORTH";
  var s = "SOUTH";
  var e = "EAST";
  var w = "WEST";
  var shortest = [];
  for ( var i = 0; i < arr.length; i++ ) {
    var current = arr[i];

    console.log(current);
    if ( current == arr[i+1] ) {
      console.log('duplicate');
      shortest = arr.slice( i, 1 );

    }else if( ( current == n && arr[i+1] == s ) || ( current == s && arr[i+1] == n ) ){
      console.log('n + s');

    shortest =  arr.slice( i, 1 );

    }else if ( ( current == e && arr[i+1] == w ) || ( current == w && arr[i+1] == e ) ) {
      console.log('e + w');

      shortest = arr.slice( i, 1 );
    }
  }

  console.log('shortest: ' + shortest);
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
//dirReducDos(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

//needs to match on two dirs that are the same
//match on 2 dirs that are opposites
//remove them from the array
//do it until there are no more dupes
