
$(function(){
   
    $('#go').click(function(){
            function iscomplete(){
                if(isComplete===false)
                    {
                        isComplete=true;
                    }
                else{
                    place='second';
                }
            }
        
        var carWidth= $('#c1').width();
        
        var raceTrackWidth = $(window).width() - carWidth;

        
        var raceTime1 = Math.floor( (Math.random()*5000) + 1 );
        var raceTime2 = Math.floor( (Math.random()*5000) + 1 );
        
        var isComplete = false;
        
        var place='first';
        
  
                $('#c2').animate({
            left:(raceTrackWidth - carWidth)
        },raceTime2,function(){
            iscomplete();
            
            $('#res2').text('Finished in '+ place+ ' place and in time ' + raceTime2 +' ms ! ');
        });
        
    
        $('#c1').animate({
            left:raceTrackWidth
        },raceTime1,function(){
            iscomplete();
            
            $('#res1').text('Finished in '+ place+ ' place and in time ' + raceTime1 +' ms ! ');
            

        });
        
   
    });
    
    
    

    
    
    $("#reset").click(function(){
        $("#c1").css("left","0"),
            $("#c2").css("left","-206px")
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});