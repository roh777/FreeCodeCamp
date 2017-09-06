$(document).ready(()=> {

    var timer_seconds = 0;
    var timer_duration = 25; //in minutes
    var timer; //this will hook to setInterval



    function initializeClock() {
        //set initial value to clock
        timer_seconds = timer_duration * 60;
        var t = convertSeconds(timer_seconds);
        $('div#timer').text(t.minutes + ':' + t.seconds);
        
    }

    function convertSeconds(secs) {
        
        var min = Math.floor(secs/60);
        var left_secs = secs % 60;
        
        return {
            minutes : min > 9 ? min : '0' + min,
            seconds : left_secs > 9 ? left_secs : '0' + left_secs
        };
    }


    function startTimer() {

         timer = setInterval(()=>{
            timer_seconds = timer_seconds - 1;
            
            if(timer_seconds >= 0) {
                
                t = convertSeconds(timer_seconds);
                $('div#timer').text(t.minutes + ':' + t.seconds);

            } else {
                stopped = true;
                stopTimer();
            }
        } , 1000);

        $('#stop').addClass('show').removeClass('hidden');
        $('#start').addClass('hidden').removeClass('show');
        $('#reset').addClass('hidden').removeClass('show');
        //hidden change buttons
        $('.change').addClass('hidden').removeClass('show');
        
    }

    function stopTimer() {
        clearInterval(timer);
        if(timer_seconds > 0) {
            $('#stop').addClass('hidden').removeClass('show');
            $('#reset').addClass('show').removeClass('hidden');
            $('#start').addClass('show').removeClass('hidden').text('Continue');

        }
    }

    function resetTimer() {
        timer_seconds = 25 * 60;
        $('#reset').addClass('hidden').removeClass('show');
        $('#start').text('Start');
        $('.change').addClass('show').removeClass('hidden');
        initializeClock();
    }

    function toggleTimerSeconds() {
        var sign = $(this).attr('sign');
        console.log(sign);
        
        if(timer_duration < 60 && timer_duration > 1) {
            timer_duration = (sign > 0) ? (timer_duration + 1) : (timer_duration - 1);
        }
        initializeClock();
    }

    initializeClock();
    $('#start').on('click', startTimer);
    $('#stop').on('click', stopTimer);
    $('#reset').on('click', resetTimer);
    $('button.change').on('click',toggleTimerSeconds);

}) 

