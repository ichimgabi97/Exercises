//Record Collection Start

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(records[id].hasOwnProperty(prop)){
      if(value && prop !== "tracks"){
            records[id][prop] = value;
      }else  if(value && prop === "tracks"){
            records[id][prop].push(value);
      }else if(!value){
            delete records[id][prop];
      }
    }else{
        if(prop === "tracks"){
            records[id][prop] = [];
            records[id][prop].push(value);
        }
        else if(prop === "artist"){
            records[id] = {"artist": value};
        }
        else if(prop === "albumTitle"){
            records[id] = {"albumTitle": value};
        }
    }
  
    return records;
  }
  
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
  console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
  console.log(updateRecords(recordCollection, 2548, "artist", ""));
  console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
  console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
  console.log(updateRecords(recordCollection, 2548, "tracks", ""));
  console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
  //Record Collection End

  //----------------------------------------------------------------------------------------------------------------


  //Profile Lookup Start

  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i]["firstName"] === name){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        }else{
          return "No such property";
        }
      }
    }
  
    return "No such contact";
    // Only change code above this line
  }

  
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
//Profile Lookup End


//---------------------------------------------------------------------------

//Use Recursion to Create a Countdown Start
function countdown(n){
    if(n < 1){
      return [];
    }
    
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  
  }

  console.log(countdown(-1));
  console.log(countdown(10));
  console.log(countdown(5));

//Use Recursion to Create a Countdown End