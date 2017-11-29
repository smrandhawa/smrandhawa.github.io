var chart_config = {
	chart: {
		container: "#OrganiseChart-big-commpany",
		levelSeparation:    70,
        siblingSeparation:  60,
        nodeAlign: "CENTRE",
		animateOnInit: true,

        node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
         },

	},
	nodeStructure: {
		innerHTML: "#first-post",
		connectors: {
			type: "curve",
			style: {
				'stroke': '#FF5555',
				"stroke-width": 2,
				'arrow-end': 'oval-wide-long'
			}
		},
		children: [
			{
				innerHTML: "#first-launch"
			},
			{
				innerHTML: "#second-launch"
			},
			{
				innerHTML: "#third-launch"
			}
		]
	}
};
