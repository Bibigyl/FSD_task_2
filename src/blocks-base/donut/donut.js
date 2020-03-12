class Donut {

    constructor($donut) {

        this.DONUT_COLORS = {
            excellent :'#FFE39C', 
            good: '#6FCF97', 
            satisfactorily: '#BC9CFF', 
            badly: '#919191'
        }

        this.$donut = $donut;
        let $mark = $donut.find('.js-donut__mark');

        $mark.on('mouseenter', this.handleMarkMouseEnter.bind(this));
        $mark.on('mouseleave', this.handleMarkMouseLeave.bind(this));


        let values = [];
        let value;
        let donut = $donut.get(0);

        donut.querySelectorAll('.js-donut__mark').forEach(function(mark) {
            value = mark.getAttribute('data-value');
            values.push(value);
        });

        this.buildDonutDiagram(values, donut);

    }

    handleMarkMouseEnter() {
        let $mark = $(event.target);
        let $donut = (this).$donut;

        let markName = $mark.find('.js-shape-circle').attr('data-mark-name');
        let $seg = $donut.find(`.js-donut-segment[data-mark-name=${markName}]`);
    
        $seg.attr('stroke-width', 3);
        $seg.attr('stroke', this.DONUT_COLORS[markName]);
    
        let $chartNumber = $donut.find('.js-chart-number');
        let $chartLabel = $donut.find('.js-chart-label');
    
        $chartNumber.text($seg.attr('data-value'));
        $chartNumber.attr('fill', this.DONUT_COLORS[markName]);
        $chartLabel.attr('fill', this.DONUT_COLORS[markName]);
    }

    handleMarkMouseLeave() {
        let $mark = $(event.target);
        let $donut = (this).$donut;

        let markName = $mark.find('.js-shape-circle').attr('data-mark-name');
        let $seg = $donut.find(`.js-donut-segment[data-mark-name=${markName}]`);
    
        $seg.attr('stroke-width', 1);
        $seg.attr('stroke', `url(#${markName})`);
    
        let $chartNumber = $donut.find('.js-chart-number');
        let $chartLabel = $donut.find('.js-chart-label');
    
        $chartNumber.text($chartNumber.attr('data-sum'));
        $chartNumber.attr('fill', 'grey');
        $chartLabel.attr('fill', 'grey');
    }


    buildDonutDiagram(vals, node) {
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
}


$('.js-donut').each(function() {
    let donut = new Donut($(this));
})