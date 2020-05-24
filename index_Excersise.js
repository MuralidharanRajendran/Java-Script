// STOP-WATCH

function StopWatch(){

    let startTime,endTime,running,duration = 0;


    this.reset = function(){

        startTime,endTime,duration = 0;
        running= false;
    }

    this.start = function(){


        if(running)
            {
                throw new Error('Stop watch has already started');
            }

            //start run duration
            startTime = new Date();
            startTime = startTime.getSeconds();        
            running = true;
    }

    this.stop = function (){
        

        if(!running)
            {
                throw new Error('Stop watch is not started');
            }
            //stop running
            //return duration
            endTime = new Date();
            endTime = endTime.getSeconds();
            const seconds = endTime - startTime;
            duration += seconds;
    }

    Object.defineProperty(this, 'duration',{
        get: function() {
            return duration;
        }
    });
}

const sw = new StopWatch();

