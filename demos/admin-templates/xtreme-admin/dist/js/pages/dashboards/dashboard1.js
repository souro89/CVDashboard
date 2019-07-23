$(function() {
    "use strict";
    // ============================================================== 
    // Newsletter
    // ============================================================== 

    var chart = new Chartist.Line('.campaign', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8 , 9],
        series: [
            [80, 55, 66, 78, 85, 79, 78, 64 ,48],
            [75, 85, 96, 78, 55, 69, 78, 74 ,68],
            [95, 75, 67, 77, 57, 62, 73, 74 ,84],
            [65, 78, 56, 88, 45, 69, 68, 74 ,58],
            [76, 63, 71, 62, 58, 91, 85, 71 ,80]
        ]
    }, {
        low: 0,
        high: 98,

        showArea: false,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisY: {
            onlyInteger: true,
            scaleMinSpace: 40,
            offset: 20,
            labelInterpolationFnc: function(value) {
                return (value / 1);
            }
        },

    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box 
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if (ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

    // Create the gradient definition on created event (always after chart re-render)
    chart.on('created', function(ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(64, 196, 255, 1)'
        });
    });


    var chart = [chart];
    
    // ============================================================== 
    // Our Visitor
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#visitor',
        data: {
            columns: [
                ['IT OPS', 1096],
                ['IT Risk', 53],
                ['Digital', 18],
                ['Dev & testing', 17],
                ['IT PMO', 17],
                ['Others', 110]
            ],

            type: 'donut',
            tooltip: {
            show: true
        }
        },
        donut: {
            label: {
                show: false
            },
            title: "Department Wise Breakup",
            width: 35,
            
        },
        
        legend: {
            hide: true
            //or hide: 'data1'
            //or hide: ['data1', 'data2']
            
        },
        color: {
            pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb', '#357a38', '#b26a00']
        }
    });
    // ============================================================== 
    // Our Visitor
    // ============================================================== 
    var sparklineLogin = function() {
            $('#ravenue').sparkline([1120, 1002, 1059, 985, 1121, 1165, 1311], {
                type: 'bar',
                height: '100',
                barWidth: '4',
                width: '100%',
                resize: true,
                barSpacing: '11',
                barColor: '#fff'
            });
        $('#views').sparkline([85, 56, 89, 113, 72, 59, 113], {
            type: 'line',
            height: '72',
            lineColor: 'transparent',
            fillColor: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            resize: true,
        });
    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

    // ============================================================== 
    // Bounce rate
    // ============================================================== 
    var ctx = document.getElementById("bouncerate");
    var salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            datasets: [{
                label: 'Attr %',
                data: [12, 19, 12, 15, 10, 17, 14, 13, 17],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#2961ff'

                ],
                borderWidth: 3
            }]
        },
        options: {
            elements: { point: { radius: 2 } },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });

    

    
    // This is for the chat messege on enter
    $(function() {
            $(document).on('keypress', "#textarea1", function (e) {
                if (e.keyCode == 13) {
                    var id = $(this).attr("data-user-id");
                    var msg = $(this).val();
                    msg = msg_sent(msg);
                    $("#someDiv").append(msg);
                    $(this).val("");
                    $(this).focus();
                }
            });
            
        });
});



var data = {
    labels: ['OPS', 'DWBI', 'SEC', 'OTH.', 'DIGITAL', 'DEV & TESTING', 'Risk'],
    series: [
        [55, 45, 43, 57, 85, 87, 53],
        [76, 84, 53, 78, 49, 65, 33]
    ]
};

var options = {
    axisX: {
        showGrid: false
    },
    seriesBarDistance: 10,
    chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 0
    },
    plugins: [
        Chartist.plugins.tooltip()
    ],
    width: '100%'
};

var responsiveOptions = [
    ['screen and (max-width: 320px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function(value) {
                return value[0];
            }
        }
    }]
];

new Chartist.Bar('.net-income', data, options, responsiveOptions);

setTimeout( function() {
    new Chartist.Bar('.net-income', data, options, responsiveOptions);
}, 500);