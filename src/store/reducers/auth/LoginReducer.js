const initialState = {
	user: {
		_id: "5d41595475e9d6e92f96ceca",
		age: 18,
		name: "Dorothy Stuart",
		gender: "female",
		email: "dorothystuart@dreamia.com",
		phone: "+92 (931) 518-2923",
		address: "300 Manhattan Avenue, Katonah, Kentucky, 3737",
		about:
			"Aute cillum cupidatat amet irure proident do sunt nisi id eu. Cupidatat aliqua velit id mollit.",
		position: {
			lng: 73.3817,
			lat: 30.342
		},
		bloodgroup: "aneg",
		donatedTo: [
			{
				id: "5d4159543aa7638a1172c11a",
				name: "Gray Battle"
			},
			{
				id: "5d415954c4fd3e58fd927cb0",
				name: "Hahn Mooney"
			},
			{
				id: "5d415954840d4510977f4356",
				name: "Sabrina Donaldson"
			}
		]
	},
	userDonor: {
		_id: "5d415954731b633b7e3eae06",
		age: 19,
		name: "Donaldson Pope",
		gender: "male",
		email: "donaldsonpope@dreamia.com",
		phone: "+92 (844) 489-2669",
		address: "687 Jardine Place, Buxton, Hawaii, 7121",
		about:
			"Consequat commodo sint tempor reprehenderit. Veniam deserunt proident ea excepteur pariatur magna do aute.",
		position: {
			lng: 73.371,
			lat: 30.3404
		},
		bloodgroup: "opos",
		donatedTo: [
			{
				id: "5d4159549f31d3382a3cfaaf",
				name: "Rochelle Lopez"
			},
			{
				id: "5d415954098e12fc061d138c",
				name: "Curry Harrington"
			},
			{
				id: "5d415954172a7c1860138c74",
				name: "Elizabeth Ortiz"
			}
		]
	}
};

export const loginReducer = (state = initialState, action) => {
	return state;
};
