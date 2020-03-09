$(document).ready(function() {

    $('.js-donut').each(function() {

        let donutColors = {
            excellent :'#FFE39C', 
            good: '#6FCF97', 
            satisfactorily: '#BC9CFF', 
            badly: '#919191'
        }
        let $mark = $(this).find('.js-donut__mark');

        $mark.on('mouseenter', function() {
            let markName = $(this).find('.js-shape-circle').attr('data-mark-name');
            let $donut = $(this).closest('.js-donut');
            let $seg = $donut.find(`.js-donut-segment[data-mark-name=${markName}]`);
        
            $seg.attr('stroke-width', 3);
            $seg.attr('stroke', donutColors[markName]);
        
            let $chartNumber = $donut.find('.js-chart-number');
            let $chartLabel = $donut.find('.js-chart-label');
        
            $chartNumber.text($seg.attr('data-value'));
            $chartNumber.attr('fill', donutColors[markName]);
            $chartLabel.attr('fill', donutColors[markName]);
        });
        
        $mark.on('mouseleave', function() {
            let markName = $(this).find('.js-shape-circle').attr('data-mark-name');
            let $donut = $(this).closest('.js-donut');
            let $seg = $donut.find(`.js-donut-segment[data-mark-name=${markName}]`);
        
            $seg.attr('stroke-width', 1);
            $seg.attr('stroke', `url(#${markName})`);
        
            let $chartNumber = $donut.find('.js-chart-number');
            let $chartLabel = $donut.find('.js-chart-label');
        
            $chartNumber.text($chartNumber.attr('data-sum'));
            $chartNumber.attr('fill', 'grey');
            $chartLabel.attr('fill', 'grey');
        });
    });
});


document.addEventListener('DOMContentLoaded', function(event) { 

    document.querySelectorAll('.js-donut').forEach(function(elem) {
        let values = [];
        let value;

        elem.querySelectorAll('.js-donut__mark').forEach(function(elem) {
            value = elem.getAttribute('data-value');
            values.push(value);
        });

        donutDiagram(values, elem);

        function donutDiagram(vals, node) {
            
            let sum = 0;
            vals.forEach(function(el) {
                sum += parseInt(el, 10);
            });
        
            let pers = [];
            vals.forEach(function(el, i) {
                pers[i] = parseInt( (el / sum * 100).toFixed(), 10);
            });
        
            const INITIAL_OFFSET = -25;
            let arSum = INITIAL_OFFSET;
            let segs = node.querySelectorAll('.js-donut-segment');
        
            for (let i = 0; i < 4; i++) {
                let one = pers[i] ? pers[i] - 1 : 0;
                let two = pers[i] ? (100 - pers[i]) + 1 : (100 - pers[i]);
                segs[i].setAttribute('stroke-dasharray', `${one} ${two}`);
                segs[i].setAttribute('stroke-dashoffset', arSum);
                segs[i].setAttribute('data-value', vals[i]);
                arSum = arSum + pers[i+1];
            }
        
            let chart = node.querySelector('.js-chart-number');
            chart.setAttribute('data-sum', sum);
            chart.textContent = sum;
        }
    });
});