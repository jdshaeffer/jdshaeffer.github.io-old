var inventory = [];
var blue = false; var red = false; var white = false; var green = false; var yellow = false;
var startRoom = true, room1 = false, room2 = false, room3 = false, room4 = false, room5 = false, room6 = false,
        room7 = false, room8 = false, room9 = false, room10 = false, room11 = false, room12 = false, room13 = false,
        room14 = false, room15 = false, room16 = false, room17 = false, room18 = false, room19 = false, room20 = false, end = false;

function getRandomNum(min, max)
{
	min = 0;
	max = 99999999;
    return Math.random() * (max - min) + min;
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

function showHelp()
{
	$('#game-text').append("<p>Walk with 'n','s','e','w'. Use 'i' to check your inventory. Type 'look' to check out your surroundings.\
                            Get all the keycards to the end to win.\
                            Good luck.</p>");
}

function playerInput(input)
{
	var x = input;
	if(x == "help")
		showHelp();
	else if(x == "i" || x == "inventory")
		showInventory();
	else if(x == "dance")
		$('#game-text').append("<p>You dance till the end of time.</p>");
	else if(x == "sleep" || x == "nap")
		$('#game-text').append("<p>You do so and wake up feeling quite refreshed.</p>");
	else if(x == "give up" || x == "quit" || x == "escape" || x == "exit")
		$('#game-text').append("<p>Not until you've gotten the keycards and escaped.</p>");
	else if(startRoom)
	{
		if(x == "yes")
        {
            $('#game-text').append("<p>You enter the maze.</p>");
            room1 = true; startRoom = false;
        }
        else if(x == "no")
        {
            $('#game-text').append("<p>Okay. Goodbye.</p>");
            end = true; startRoom = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room1)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 1. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 3.</p>");
            room3 = true; room1 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 2.</p>");
            room2 = true; room1 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 4.</p>");
            room4 = true; room1 = false; 
        }
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room2)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 2. There's nothing here.</p>");
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 1.</p>");
            room1 = true; room2 = false; 
        }
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room3)
	{
		if(x == "look")
		{
			if(white)
          		$('#game-text').append("<p>You are in Room 3. There's nothing here.</p>");
          	else
          		$('#game-text').append("<p>You are in Room 3. There's a white keycard here.</p>");
		}
		else if(x == "take keycard" || x == "take white keycard")
		{
			if(white)
				$('#game-text').append("<p>You already have it.</p>");
			else
			{
				$('#game-text').append("<p>Taken.</p>");
				inventory.push("White Keycard");
				white = true;
			}
		}
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 5.</p>");
            room5 = true; room3 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 6.</p>");
            room6 = true; room3 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 8.</p>");
            room8 = true; room3 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 1.</p>");
            room1 = true; room3 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room4)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 4. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 8.</p>");
            room8 = true; room4 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 1.</p>");
            room1 = true; room4 = false; 
        }
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room5)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 5. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 7.</p>");
            room7 = true; room5 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 10.</p>");
            room10 = true; room5 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 12.</p>");
            room12 = true; room5 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 3.</p>");
            room3 = true; room5 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room6)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 6. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 10.</p>");
            room10 = true; room6 = false;
        }
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 3.</p>");
            room3 = true; room6 = false; 
        }
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room7)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 7. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 17.</p>");
            room17 = true; room7 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 14.</p>");
            room14 = true; room7 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 16.</p>");
            room16 = true; room7 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 5.</p>");
        	room5 = true; room7 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room8)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 8. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 12.</p>");
            room12 = true; room8 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 3.</p>");
            room3 = true; room8 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 15.</p>");
            room15 = true; room8 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 4.</p>");
            room4 = true; room8 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room9)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 9. There's nothing here.</p>");
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 12.</p>");
            room12 = true; room9 = false; 
        }
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room10)
	{
		if(x == "look")
		{
			if(blue)
          		$('#game-text').append("<p>You are in Room 10. There's nothing here.</p>");
          	else
          		$('#game-text').append("<p>You are in Room 10. There's a blue keycard here.</p>");
		}
		else if(x == "take keycard" || x == "take blue keycard")
		{
			if(blue)
				$('#game-text').append("<p>You already have it.</p>");
			else
			{
				$('#game-text').append("<p>Taken.</p>");
				inventory.push("Blue Keycard");
				blue = true;
			}
		}
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 14.</p>");
            room14 = true; room10 = false;
        }
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 5.</p>");
            room5 = true; room10 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 6.</p>");
            room6 = true; room10 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room11)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 11. There's nothing here.</p>");
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 14.</p>");
            room14 = true; room11 = false; 
        }
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room12)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 12. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 16.</p>");
            room16 = true; room12 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 5.</p>");
            room5 = true; room12 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 9.</p>");
            room9 = true; room12 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 8.</p>");
            room8 = true; room12 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room13)
	{
		if(x == "look")
		{
			if(red)
          		$('#game-text').append("<p>You are in Room 13. There's nothing here.</p>");
          	else
          		$('#game-text').append("<p>You are in Room 13. There's a red keycard here.</p>");
		}
		else if(x == "take keycard" || x == "take red keycard")
		{
			if(red)
				$('#game-text').append("<p>You already have it.</p>");
			else
			{
				$('#game-text').append("<p>Taken.</p>");
				inventory.push("Red Keycard");
				red = true;
			}
		}
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 20.</p>");
            room20 = true; room13 = false; 
        }
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room14)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 14. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 18.</p>");
            room18 = true; room14 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 11.</p>");
            room11 = true; room14 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 7.</p>");
            room7 = true; room14 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 10.</p>");
            room10 = true; room14 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room15)
	{
		if(x == "look")
		{
			if(yellow)
          		$('#game-text').append("<p>You are in Room 15. There's nothing here.</p>");
          	else
          		$('#game-text').append("<p>You are in Room 15. There's a yellow keycard here.</p>");
		}
		else if(x == "take keycard" || x == "take yellow keycard")
		{
			if(yellow)
				$('#game-text').append("<p>You already have it.</p>");
			else
			{
				$('#game-text').append("<p>Taken.</p>");
				inventory.push("Yellow Keycard");
				yellow = true;
			}
		}
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 8.</p>");
            room8 = true; room15 = false; 
        }
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
            $('#game-text').append("<p>You can't go there.</p>");
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room16)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 16. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 20.</p>");
            room20 = true; room16 = false;
        }
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 7.</p>");
            room7 = true; room16 = false; 
        }
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 12.</p>");
            room12 = true; room16 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room17)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 17. There's nothing here. The exit is north.</p>");
        else if(x == "n")
        {
            if(white && blue && red && yellow && green)
            {
            	$('#game-text').append("<p>You exit the maze. Well done!</p>");
            	end = true; room17 = false;
            }
            else
            	$('#game-text').append("<p>You can't exit without all the keycards.</p>");
        }
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 20.</p>");
            room20 = true; room17 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 7.</p>");
            room7 = true; room17 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room18)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 18. There's nothing here.</p>");
        else if(x == "n")
        {
            $('#game-text').append("<p>Room 19.</p>");
            room19 = true; room18 = false;
        }
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 14.</p>");
            room14 = true; room18 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room19)
	{
		if(x == "look")
		{
			if(green)
          		$('#game-text').append("<p>You are in Room 19. There's nothing here.</p>");
          	else
          		$('#game-text').append("<p>You are in Room 19. There's a green keycard here.</p>");
		}
		else if(x == "take keycard" || x == "take green keycard")
		{
			if(green)
				$('#game-text').append("<p>You already have it.</p>");
			else
			{
				$('#game-text').append("<p>Taken.</p>");
				inventory.push("Green Keycard");
				green = true;
			}
		}
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "e")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 18.</p>");
            room18 = true; room19 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(room20)
	{
		if(x == "look")
          	$('#game-text').append("<p>You are in Room 20. There's nothing here.</p>");
        else if(x == "n")
            $('#game-text').append("<p>You can't go there.</p>");
        else if(x == "w")
        {
            $('#game-text').append("<p>Room 17.</p>");
            room17 = true; room20 = false; 
        }
        else if(x == "e")
        {
            $('#game-text').append("<p>Room 13.</p>");
            room13 = true; room20 = false; 
        }
        else if(x == "s")
        {
            $('#game-text').append("<p>Room 16.</p>");
            room16 = true; room20 = false;
        }
        else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
}

$(document).ready(function()
{
	$(document).keypress(function(key)
	{
		if(key.which == 13 && $('#user-input').is(':focus'))
		{
			var value = $('#user-input').val().toLowerCase();
			$('#user-input').val("");
			$('#game-text').append("<p>" + "<b>" + value + "</b>" + "</p>");
			playerInput(value);
			window.scrollTo(0,document.body.scrollHeight);
		}
		else if(end)
		{
			return;
			//$('#game-text').append("<p>Congratulations. Your code is: </p>" + getRandomNum());
			//window.scrollTo(0,document.body.scrollHeight);
			//return;
		}
	})
    //if(end)
      //  return;
	//$('#game-text').append("<a href="post.html">Return</a>") // href link back to home
})

//$('#game-text').append("Click <a href="post.html">here</a> to return. Thank you.");
