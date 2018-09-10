$(document).ready(function(){
	if(plcType != "1200" && plcType != "1500")
	{
		$.ajax({type:"GET",url:"../../../Portal/Intro.mwsl",data:"",dataType:"text"})
		.done(function(webpageData){
			var search12 = webpageData.search("CPU12");
			var search15 = webpageData.search("CPU15");
			if (search12 >= 0)
			{
				plcType = "1200";
				$.init();
			}
			elseif (search15 >= 0)
			{ 
			plcType = "1500";
			$.init();
			
			$.init = fuction(){
				S7Framework.initialize(plcType, "");
				$("#restart").click(function(){
					S7Framework.restartCPU();
				});
			}