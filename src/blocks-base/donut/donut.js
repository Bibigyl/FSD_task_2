import bind from 'bind-decorator';

class Donut {

    DONUT_COLORS = {
        excellent :'#FFE39C', 
        good: '#6FCF97', 
        satisfactorily: '#BC9CFF', 
        badly: '#919191'
    };
    NUMBER_OF_MARKS = 4;
    SEGMENT_WIDTH = 1;
    ACTIVE_SEGMENT_WIDTH = 3;

    constructor($donut) {

        this.$donut = $donut;
        let $marks = $donut.find('.js-donut__mark');

        $marks.on('mouseenter', this.handleMarkMouseEnter);
        $marks.on('mouseleave', this.handleMarkMouseLeave);


        let values = [];
        let value;
        let donut = $donut.get(0);

        donut.querySelectorAll('.js-donut__mark').forEach(function(mark) {
            value = mark.getAttribute('data-value');
            values.push(value);
        });

        this.buildDonutDiagram(values, donut);
    }


    @bind
    handleMarkMouseEnter() {
        let $mark = $(event.target);
        let $donut = (this).$donut;

        let markId = $mark.attr('data-mark-id');
        let colorPrimary = $mark.attr('data-color-primary');
        let $segment = $donut.find(`.js-donut-segment[data-mark-id=${markId}]`);

    
        $segment.attr('stroke-width', this.ACTIVE_SEGMENT_WIDTH);
        $segment.attr('stroke', colorPrimary);
    
        let $chartNumber = $donut.find('.js-chart-number');
        let $chartLabel = $donut.find('.js-chart-label');
    
        $chartNumber.text($segment.attr('data-value'));
        $chartNumber.attr('fill', colorPrimary);
        $chartLabel.attr('fill', colorPrimary);
    }

    @bind
    handleMarkMouseLeave() {
        let $mark = $(event.target);
        let $donut = (this).$donut;

        let markId = $mark.attr('data-mark-id');
        let $segment = $donut.find(`.js-donut-segment[data-mark-id=${markId}]`);
    
        $segment.attr('stroke-width', this.SEGMENT_WIDTH);
        $segment.attr('stroke', `url(#${markId})`);
    
        let $chartNumber = $donut.find('.js-chart-number');
        let $chartLabel = $donut.find('.js-chart-label');
    
        $chartNumber.text($chartNumber.attr('data-sum'));
        $chartNumber.attr('fill', 'grey');
        $chartLabel.attr('fill', 'grey');
    }

    @bind
    buildDonutDiagram(values, node) {

        let sum = 0;
        values.forEach(function(value) {
            sum += parseInt(value, 10);
        });
    
        let percents = [];
        values.forEach(function(value, i) {
            percents[i] = Number( (value / sum * 100).toFixed() );
        });
    
        const INITIAL_OFFSET = -25;
        let incrementalSum = INITIAL_OFFSET;
        let segments = node.querySelectorAll('.js-donut-segment');
    
        for (let i = 0; i < values.length; i++) {
            let dash = percents[i] ? percents[i] - 1 : 0;
            let offset = percents[i] ? (100 - percents[i]) + 1 : (100 - percents[i]);
            segments[i].setAttribute('stroke-dasharray', `${dash} ${offset}`);
            segments[i].setAttribute('stroke-dashoffset', incrementalSum);
            segments[i].setAttribute('data-value', values[i]);
            incrementalSum = incrementalSum + percents[i+1];
        }
    
        let chart = node.querySelector('.js-chart-number');
        chart.setAttribute('data-sum', sum);
        chart.textContent = sum;
    }
}


$('.js-donut').each(function() {
    let donut = new Donut($(this));
})