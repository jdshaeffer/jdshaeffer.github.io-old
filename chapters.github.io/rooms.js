var rooms =
{
	"start": 
	{
		"intro": "Outside of cabin.",
		"description": "You're just outside a burnt down cabin. You catch the glimpse of a river to your west and a clearing to your north.\
		There seems to be a pie poking out of the cabin.",
		"directions":
		{
			"north": "clearing",
			"west": "river"
		},
		"items":
		{
			"cabin": "It used to be a nice house. The trolls must've destroyed it.",
			"pie": "It's a cherry pie. Just sitting there. Nice and warm too."
		},
		"inv":
		{
			"pie": "Pie"
		}
		/*
		"npcs":
		{
			"old lady": "The old lady emits a strange noise and attacks you."
		}
		*/
	},
	"clearing":
	{
		"intro": "Clearing.",
		"description":"You arrive to a clearing. There's a lighthouse to the north and a strange smell coming from the east.",
		"directions":
		{
			"south": "start",
			"north": "lighthouse",
			"east": "trolls"
		}
	},
	"lighthouse":
	{
		"intro": "Outside of lighthouse.",
		"description":"You arrive to the lighthouse and walk up to the door. A strange old lady opens the door.",
		"directions":
		{
			"south": "clearing"
		}
	},
	"trolls":
	{
		"intro": "Troll cave.",
		"description": "You arrive to another clearing, there is a troll roasting some mysterious meat.",
		"directions":
		{
			"west": "clearing"
		}
	},
	"river":
	{
		"intro": "River.",
		"description":"You arrive to a roaring river.",
		"directions":
		{
			"east": "start",
			"west": "bridge"
		}
	},
	"bridge":
	{
		"intro": "Bridge.",
		"description": "You try to cross the bridge but a troll jumps out and bites your leg!",
		"directions":
		{
			"east": "river"
		}
	}
}