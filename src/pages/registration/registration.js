//------------------ Imports ------------------------
import "../../scss/main.scss";
import "../../js/main.js";

//import ApexCharts from 'apexcharts';



$( document ).ready(function() {

	$(".button_login").on("click", function() {
		$(".check-in-card-wrap").addClass("hidden");
		$(".login-card-wrap").removeClass("hidden");
		$(".registration__front").css("height", "670px");
	});

	$(".button_check-in").on("click", function() {
		$(".login-card-wrap").addClass("hidden");
		$(".check-in-card-wrap").removeClass("hidden");
		$(".registration__front").css("height", "702px");
	});


	//-------------------------- diagram? gradient doesnt work ----------------

//   var options = {
//       chart: {
//           width: 300,
//           type: 'donut',
//       },
//       dataLabels: {
//           enabled: false
//       },
//       series: [25, 25, 50],
//       fill: {
//       					colors: ["#8BA4F9", "#66D2EA", "#FFE39C"],
//                 type: 'gradient',
//                 gradient: {
// 							    //shade: 'light',
// 							    type: "horizontal",
// 							    // shadeIntensity: 0.5,
// 							    //gradientFromColors: ["#8BA4F9", "#6FCF97", "#ddd"],
// 							    gradientToColors: ["#8BA4F9", "#6FCF97", "#FFBA9C"],

// 							     inverseColors: true,
// 							    // opacityFrom: 1,
// 							    // opacityTo: 1,
// 							    // stops: [0, 50, 100],
// 							    // colorStops: []
// 							  }
//             },
//       responsive: [{
//           breakpoint: 480,
//           options: {
//               chart: {
//                   width: 200
//               },
//               legend: {
//                   show: false
//               }
//           }
//       }],
//       legend: {
//           position: 'right',
//           offsetY: 0,
//           height: 230,
//       }
//   }

//   var chart = new ApexCharts(
//       document.querySelector("#chart"),
//       options
//   );

//   chart.render()


});