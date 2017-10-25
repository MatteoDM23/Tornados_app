if (window.location.pathname.indexOf("feed") == -1) {
    $(document).ready(function() {
        
        var earthquakeData = $("#items").data("url");
        var chartData = [];
        
        for (var i = 0; i < earthquakeData.length; i++) {
            var inner = [];
            var date = new Date(earthquakeData[i].time);
    
            inner.push(date.getTime());
            inner.push(parseFloat(earthquakeData[i].mag));
            chartData.push(inner);
        }
    
        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Magnitudes of earthquakes over time'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                title: {
                    text: 'Magnitude'
                },
                min: 0
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: 'Magnitude',
                data: chartData
            }]
        });
    });
}
;
