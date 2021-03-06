if (window.location.pathname.indexOf("feed") == -1) {
    $(document).ready(function() {
        
        var tornadosData = $("#items").data("url");
        var chartData = [];
        
        for (var i = 0; i < tornadosData.length; i++) {
            var inner = [];
            var date = new Date(tornadosData[i].date);
            
            inner.push(date.getTime());
            inner.push(parseFloat(tornadosData[i].closs));
            chartData.push(inner);
        }
    
        console.log(chartData);
    
        Highcharts.chart('container', {
            chart: {
                zoomType: 'x',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Million $ loss over time in 2016'
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Loss in million $'
                },
                min: 0
            },
            legend: {
                enabled: false
            },
            tooltip : {
                formatter: function() {
                    var index = this.point.index;
                    console.log(chartData[index][2]);
                    
                    var tooltip = '<div class="tooltip-main">';
                    tooltip += '<h3>'+chartData[index][2]+'</h3><br>';
                    tooltip += '<div class="label">Time: '+new Date(chartData[index][0])+'</div><br>';
                    tooltip += '<div class="label">Million$: '+chartData[index][1]+'</div><br>';
                    tooltip += '</div>';
                    
                    return tooltip;
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

// new tornadoes chart //

// if (window.location.pathname.indexOf("feed") == -1) {
//     $(document).ready(function() {
        
//         var earthquakeData = $("#items").data("url");
//         var chartData = [];
        
//         for (var i = 0; i < earthquakeData.length; i++) {
//             var inner = [];
//             var date = new Date(earthquakeData[i].time);
            
//             inner.push(date.getTime());
//             inner.push(parseFloat(earthquakeData[i].mag));
//             chartData.push(inner);
//         }
    
//         console.log(chartData);
    
//         Highcharts.chart('container', {
//             chart: {
//                 zoomType: 'x',
//                 backgroundColor: 'rgba(255, 255, 255, 0.0)',
//             },
//             credits: {
//                 enabled: false
//             },
//             title: {
//                 text: 'Magnitudes of earthquakes over time'
//             },
//             xAxis: {
//                 type: 'datetime',
//                 title: {
//                     text: 'Time'
//                 }
//             },
//             yAxis: {
//                 title: {
//                     text: 'Magnitude'
//                 },
//                 min: 0
//             },
//             legend: {
//                 enabled: false
//             },
//             series: [{
//                 type: 'area',
//                 name: 'Magnitude',
//                 data: chartData
//             }]
//         });
//     });
// }