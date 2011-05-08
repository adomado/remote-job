var RemoteJob = {

  map : function(url) {
    if(url)
    { 
      try 
      {
        var domain = url.split("http://")[1].split("/")[0];
        return {key : domain, value : 1};
      } catch(e) {}    
  	}
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
  
  
  startProcessing : function(data) {
    var allSteps = [];
    for(var i=0; i<data.length; i++)
    {
      var step = RemoteJob.map(data[i]);
      if(step)
        allSteps = allSteps.concat(step);
    }
      
    var result = RemoteJob.reduce(allSteps);
    return result;
  },
  
  
  init : function(successCallback) {
    $.get("/workee/test-data.txt", function(data) {
      if(data)
      {
        result = RemoteJob.startProcessing(data.split("\n"));
        successCallback(result);
      }
    }); 
  }  

};  // RemoteJob
