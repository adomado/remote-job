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
  
  
  startMapReduce : function(allData) {
    var allSteps = [];
    var allIds = [];
    for(var i=0; i<allData.length; i++)
    {
      var url = allData[i].stage_one.data;
      allIds.push(allData[i].stage_one.id);
      var step = RemoteJob.map(url);
      if(step)
        allSteps = allSteps.concat(step);
    }
      
    var result = RemoteJob.reduce(allSteps);
    return {computedResult : result, dataIds : allIds};
  },
  
  
  init : function(successCallback) {
    $.get("/stage/one_data", function(allData) {
      if(allData)
      {
        result = RemoteJob.startMapReduce(allData);
        $.get("/stage/one_result", {data : JSON.stringify(result.computedResult), ids : JSON.stringify(result.dataIds)}, function(data) {
          console.log(data);
        });
        successCallback(result);
      }
    }); 
  }  

};  // RemoteJob
