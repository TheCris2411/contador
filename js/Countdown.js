
    simplyCountdown('#cuenta', {
        year: 2024, 
        month: 12, 
        day: 25, 
        hours: 7, 
        minutes: 36, 
        seconds: 0, 
        words: { 
            days: { singular: 'dia', plural: 'dias' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: 'segundo', plural: 'segundos' }
        },
        plural: true, 
        inline: false,
        inlineClass: 'simply-countdown-inline', 
        
        enableUtc: true,
        onEnd: function() { 
            document.getElementById('portada').classList.add('oculta');
            return; }, 
        refresh: 1000, 
        sectionClass: 'simply-section', 
        amountClass: 'simply-amount', 
        wordClass: 'simply-word', 
        zeroPad: false,
        countUp: false
});

let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });