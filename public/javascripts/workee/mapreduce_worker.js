var Job = {

  data : [
          "We are glad to see you here. This site is dedicated to",
          "poetry and to the people who make poetry possible",
          "poets and their readers. FamousPoetsAndPoems.com is",
          "a free poetry site. On our site you can find a large",
          "collection of poems and quotes from over 631 poets",
          "Read and Enjoy Poetry",
          "I, too, sing America",
          "I am the darker brother",
          "They send me to eat in the kitchen",
          "When company comes",
          "But I laugh",
          "And eat well",
          "And grow strong",
          "Tomorrow",
          "Ill be at the table",
          "When company comes",
          "Nobodyll dare",
          "Say to me",
          "Eat in the kitchen",
          "Then",
          "Besides", 
          "Theyll see how beautiful I am",
          "And be ashamed",
          "I, too, am America"
        ],
        

  map : function(line) {
    var splits = line.split(" ");
    var temp = [];
    for(var i=0; i<splits.length; i++)
    {
      temp.push({key : splits[i], value : 1});
    }
    return temp;
  },
  

  reduce : function(allSteps) {
    var result = {};
    for(var i=0; i<allSteps.length; i++)
    {
      var step = allSteps[i];
      result[step.key] = result[step.key] ? (result[step.key] + 1) : 1;
    }
    return result;
  },


  init : function() {
    var allSteps = [];
    for(var i=0; i<Job.data.length; i++)
      allSteps = allSteps.concat(Job.map(Job.data[i]));
      
    var result = Job.reduce(allSteps)
    console.log(JSON.stringify(result));
  }

};
