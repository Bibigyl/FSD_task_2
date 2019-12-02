let donutColors = {
    excellent :'#FFE39C', 
    good: '#6FCF97', 
    satisfactorily: '#BC9CFF', 
    badly: '#919191'
}

$('.donut__mark').on('mouseenter', function() {
     
    let mark = $(this).find('.shape-circle').attr('mark');
    let $donut = $(this).closest('.donut-wrap');
    let $seg = $donut.find('.donut-segment[mark='+ mark + ']');

    $seg.attr('stroke-width', 3);
    $seg.attr('stroke', donutColors[mark]);

    let $chartNumber = $donut.find('.chart-number');
    let $chartLabel = $donut.find('.chart-label');

    $chartNumber.text($seg.attr('val'));
    $chartNumber.attr('fill', donutColors[mark]);
    $chartLabel.attr('fill', donutColors[mark]);
});

$('.donut__mark').on('mouseleave', function() {
    let mark = $(this).find('.shape-circle').attr('mark');
    let $donut = $(this).closest('.donut-wrap');
    let $seg = $donut.find('.donut-segment[mark='+ mark + ']');

    $seg.attr('stroke-width', 1);
    $seg.attr('stroke', 'url(#' + mark + ')');

    let $chartNumber = $donut.find('.chart-number');
    let $chartLabel = $donut.find('.chart-label');

    $chartNumber.text($chartNumber.attr('sum'));
    $chartNumber.attr('fill', 'grey');
    $chartLabel.attr('fill', 'grey');
})


function donutDiagram(vals, node) {
    let sum = 0
    vals.forEach(function(el) {
        sum += el;
    });

    let pers = [];
    vals.forEach(function(el, i) {
        pers[i] = +(el / sum * 100).toFixed();
    });

    let arSum = -25;
    let segs = node.querySelectorAll('.donut-segment');

    for (let i = 0; i < 4; i++) {
        let one = pers[i] ? pers[i] - 1 : 0;
        let two = pers[i] ? (100 - pers[i]) + 1 : (100 - pers[i]);
        segs[i].setAttribute('stroke-dasharray', one + ' ' + two);
        segs[i].setAttribute('stroke-dashoffset', arSum);
        segs[i].setAttribute('val', vals[i]);
        arSum = arSum + pers[i+1];
    }

    let chart = node.querySelector('.chart-number');
    chart.setAttribute('sum', sum);
    chart.textContent = sum;
}

export {donutColors, donutDiagram}
