//
// Chart
//

'use strict';

var MonthlyEarningsChart = (function() {

	// Variables

	var $chart = $('#apex-monthly-earnings');

	// Methods
	function init($this) {

		// Options
		var options = {
			chart: {
				width: '100%',
				type: 'bar',
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				},
				shadow: {
					enabled: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '50%'
				},
			},
			stroke: {
				show: false
			},
			series: [{
				name: '',
				data: [8000, 3000, 1000, 9000, 2000, 3000, 5000]
			}],
			xaxis: {
				labels: {
					format: 'MMM',
					style: {
						colors: PurposeStyle.colors.gray[600],
						fontSize: '13px',
						fontFamily: PurposeStyle.fonts.base,
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: true,
					borderType: 'solid',
					color: PurposeStyle.colors.gray[300],
					height: 6,
					offsetX: 0,
					offsetY: 0
				},
				type: 'datetime',
				categories: ['1/01/2019', '2/02/2019', '3/03/2019', '4/04/2019', '5/05/2019', '6/06/2019', '7/07/2019'],
			},
			yaxis: {
				show: false
			},
			fill: {
				type: 'solid'
			},
			markers: {
				size: 4,
				opacity: 0.7,
				strokeColor: "#fff",
				strokeWidth: 3,
				hover: {
					size: 7,
				}
			},
			grid: {
				show: false
			},
			dataLabels: {
				enabled: false
			},
			tooltip: {
				enabled: true,
				x: {
					show: false
				},
				y: {
					formatter: function(value) {
						return '$' + value + ' USD'
					},
				},
			}
		}

		// Get data from data attributes
		var dataset = $this.data().dataset,
			labels = $this.data().labels,
			color = $this.data().color,
			height = $this.data().height,
			type = $this.data().type;

		// Inject synamic properties
		options.colors = [
			PurposeStyle.colors.theme[color]
		];

		options.markers.colors = [
			PurposeStyle.colors.theme[color]
		];

		options.chart.height = height ? height : 350;

		// Init chart
		var chart = new ApexCharts($this[0], options);

		// Draw chart
		setTimeout(function() {
			chart.render();
		}, 300);

	}

	// Events

	if ($chart.length) {
		$chart.each(function() {
			init($(this));
		});
	}

})();
