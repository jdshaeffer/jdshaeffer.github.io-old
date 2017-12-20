var currentRoom = "start";
var commands = ["go","take","look","talk","inventory","examine"];
var inventory = [];
var stuff = ["sword","pie"];

function changeRoom(dir)
{
	if(rooms[currentRoom].directions[dir] !== undefined)
	{
		currentRoom = rooms[currentRoom].directions[dir];
		$('#game-text').append("<p>" + rooms[currentRoom].intro + "</p>");
	}
	else
	{
		$('#game-text').append("<p>You cannot go that way.</p>");
	}
}

function examineItems(item)
{
	if(rooms[currentRoom].items[item] !== undefined)
	{
		$('#game-text').append("<p>" + rooms[currentRoom].items[item] + "</p>");
	}
	else
	{
		$('#game-text').append("<p>I don't understand what you're trying to examine.</p>");
	}
}

function takeItem(thing)
{
	if(rooms[currentRoom].inv[thing] !== undefined)
	{
		inventory.push(rooms[currentRoom].inv[thing]);
		$('#game-text').append("<p>Taken.</p>");
		//$('#game-text').append("<p>" + rooms[currentRoom].item + "</p>");
	}
	else
	{
		$('#game-text').append("<p>You cannot take that.</p>");
	}
}

function showHelp()
{
	$('#game-text').append("<p>Here are the possible commands: </p>");
	$('#game-text').append("<p><ul>");
	for(var i = 0; i < commands.length; i++)
	{
		$('#game-text').append("<li>" + commands[i] + "</li>");
	}
	$('#game-text').append("</ul></p>");
}

function showDescription()
{
	$('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
}

function showInventory()
{
	if(inventory.length == 0)
	{
		$('#game-text').append("<p>You don't have anything.</p>");
		return;
	}
	$('#game-text').append("<p>You currently have: </p>");
	$('#game-text').append("<p><ul>");
	for(var i = 0; i < inventory.length; i++)
	{
		$('#game-text').append("<li>" + inventory[i] + "</li>");
	}
	$('#game-text').append("</ul></p>");
}

function playerInput(input)
{
	var command = input.split(" ")[0]; //changing input into an array - getting the 0 index
	
	if(command == "go")
	{
		var dir = input.split(" ")[1];
		changeRoom(dir);
	}
	else if(command == "help")
	{
		showHelp();
	}
	else if(command == "inventory")
	{
		showInventory();
	}
	else if(command == "take")
	{
		var thing = input.split(" ")[1];
		takeItem(thing);
	}
	else if(command == "examine")
	{
		var item = input.split(" ")[1];
		examineItems(item);
	}
	else if(command == "look")
	{
		showDescription();
	}
	else
	{
		$('#game-text').append("<p>I don't understand that.</p>");
	}
}

$(document).ready(function()
{
	$('#game-text').append("<p>" + rooms.start.description + "</p>");

	$(document).keypress(function(key)
	{
		if(key.which == 13 && $('#user-input').is(':focus'))
		{
			var value = $('#user-input').val().toLowerCase();
			$('#user-input').val("");
			$('#game-text').append("<p>" + "<b>" + value + "</b>" + "</p>");
			playerInput(value);
		}
	})
})