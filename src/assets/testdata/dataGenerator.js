[
	"{{repeat(20, 7)}}",
	{
		_id: "{{objectId()}}",
		age: "{{integer(18, 40)}}",
		name: "{{firstName()}} {{surname()}}",
		gender: "{{gender()}}",
		email: "{{email()}}",
		phone: "+92 {{phone()}}",
		address:
			"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
		about: '{{lorem(2, "sentence")}}',
		position: {
			lng: "{{floating(73.382001, 73.383001)}}",
			lat: "{{floating(30.357001, 30.358001)}}"
		},
		bloodgroup: function(tags) {
			var bloodgroups = [
				"oneg",
				"opos",
				"aneg",
				"apos",
				"bneg",
				"bpos",
				"abneg",
				"abpos"
			];
			return bloodgroups[tags.integer(0, bloodgroups.length - 1)];
		},
		donatedTo: [
			"{{repeat(3)}}",
			{
				id: "{{objectId()}}",
				name: "{{firstName()}} {{surname()}}"
			}
		]
	}
];
const data = [
	"{{repeat(20, 7)}}",
	{
		_id: "{{objectId()}}",
		age: "{{integer(18, 40)}}",
		name: "{{firstName()}} {{surname()}}",
		gender: "{{gender()}}",
		email: "{{email()}}",
		phone: "+92 {{phone()}}",
		address:
			"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
		about: '{{lorem(2, "sentence")}}',
		position: {
			lng: "{{floating(73.3701, 73.3901)}}",
			lat: "{{floating(30.3401, 30.3601)}}"
		},
		bloodgroup: function(tags) {
			var bloodgroups = [
				"oneg",
				"opos",
				"aneg",
				"apos",
				"bneg",
				"bpos",
				"abneg",
				"abpos"
			];
			return bloodgroups[tags.integer(0, bloodgroups.length - 1)];
		},
		donatedTo: [
			"{{repeat(3)}}",
			{
				id: "{{objectId()}}",
				name: "{{firstName()}} {{surname()}}"
			}
		]
	}
];
