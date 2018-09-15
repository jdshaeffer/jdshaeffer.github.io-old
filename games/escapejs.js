//sup bois

var win = 1000 + Math.floor(Math.random() * 8999); //random whole number between 0 and 9999
var floorbroken = false; var ate = false; var note = false; var solved = false; var erased = false; var gym = false; var radio = false;
var computerOn = false; var keypad = false; var nap = false; var music = false;
var score = 0;

function showHelp()
{
	$('#game-text').append("<p><li>'look' - repeat the description of the room</li><li>'examine' + object - gives you the description of the object.\
		</li><li>Use your imagination and cunning to escape. There are tons more actions and words you can use.</li></p>");
}

function showDescription()
{
	$('#game-text').append("<p>You're in a small room. There is a door at the far side of the room in front of you.\
		A picture is hanging up on the wall adjacent to the mattress that you've been sleeping on.\
		On the opposite side of the room is a desk with assorted things on it.</p>");
}

function playerInput(input)
{
	var x = input;
	var xsplit = input.split(" ")[0]; //changing input into an array - getting the 0 index;
	if(x == "help")
		showHelp();
	else if(xsplit == "take")
		$('#game-text').append("<p>Sorry, you can't take anything with you.</p>");	
	else if(x == "look")
		showDescription();
	else if(x == "examine")
		$('#game-text').append("<p>I don't know what you're trying to examine.</p>");
	else if(x == "use")
		$('#game-text').append("<p>I don't know what you're trying to use.</p>");
	else if(x == "examine door")
		$('#game-text').append("<p>It's a large metal door. It has no doorknob, but instead a number keypad.</p>");
	else if(x == "score")
		$('#game-text').append("<p>"+score+"</p>");
	else if(x == "open door")
	{
		if(gym)
			$('#game-text').append("<p>Your efforts of opening the door prove futile. It's far too heavy.</p>");
		else
			$('#game-text').append("<p>Your efforts of opening the door prove futile. It's far too heavy. You make a mental note to hit the gym this weekend.</p>");
	}
	else if(x == "hit gym")
	{
		if(gym)
			$('#game-text').append("<p>You couldn't possibly do any more.</p>");
		else
		{
			$('#game-text').append("<p>You do 100 pushups and 100 dips. You feel stronger already.</p>");
			score = score + 10;
			gym = true;
		}
	}
	else if(x == "escape")
		$('#game-text').append("<p>Inconceivable. The door is shut and there is no other way out.</p>");
	else if(x == "examine floor")
	{
		if(floorbroken)
			$('#game-text').append("<p>A decent ground of wooden floorboards. There's a hole from where you broke one open.</p>");
		else
			$('#game-text').append("<p>A decent ground of wooden floorboards. One seems loose.</p>");
	}
	else if(x == "examine floorboard")
	{
		if(floorbroken)
			$('#game-text').append("<p>You broke it. There's a hole now in its place.</p>");
		else
			$('#game-text').append("<p>Yep, it's loose alright. You may be strong enough to break it open.</p>");
	}
	else if(x == "break floorboard" || x == "open floorboard" || x == "break open floorboard" || x == "open floor" || x == "break floor")
	{
		if(floorbroken)
			$('#game-text').append("<p>You already did.</p>");
		else
		{
			$('#game-text').append("<p>You do so. A hole is left in its place.</p>");
			floorbroken = true;
		}
	}
	else if(x == "examine hole" || x == "examine floorboard hole" || x == "look in hole" || x == "examine radio")
	{
		if(floorbroken)
		{
			if(solved)
			{
				if(radio)
				{
					$('#game-text').append("<p>The radio is turned on but it's all static. Try tuning it to a station. ('tune to ...')</p>"); //put something here!!
				}
				else
				{
					$('#game-text').append("<p>You see an old radio. It's turned on, but it's all static.</p>"); //put something here!!
					score = score + 10;
					radio = true;
				}
			}
			else
			{
				if(radio)
				{
					$('#game-text').append("<p>The radio is still there. It's turned off.</p>");
				}
				else
				{
					$('#game-text').append("<p>You see an old radio. It's turned off.</p>");
					score = score + 10;
					radio = true;
				}
			}
		}
		else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(x == "turn on radio")
		$('#game-text').append("<p>You try but it's no use. You can't turn it on like this.</p>");
	else if(x == "examine ceiling")
		$('#game-text').append("<p>Woah! A ceiling!</p>");
	else if(x == "examine keypad")
	{
		$('#game-text').append("<p>An electronic keypad reminiscent of old cell phones. 0 - 9 with letters underneath.\
			It displays a message on its screen: 'Enter the passcode'.</p>");
		keypad = true;
	}
	else if(x == "examine picture")
		$('#game-text').append("<p>It's a photo of a nice sunset. The frame is a little askew.</p>");
	else if(x == "examine frame")
		$('#game-text').append("<p>You notice it's not balanced properly. There might be something behind it.</p>");
	else if(x == "look behind frame" || x == "look behind picture" || x == "examine behind frame" || x == "examine behind picture")
	{
		if(ate)
			$('#game-text').append("<p>There's the hole. No more nuggets.</p>");
		else
			$('#game-text').append("<p>You discover a hole in the wall! There are some chicken nuggets there. You suddenly feel very hungry.</p>");
	}
	else if(x == "examine sunset")
		$('#game-text').append("<p>The contrast of the colors make this a beautiful sunset. You gaze at it for another half hour.</p>");
	else if(x == "examine chicken nuggets" || x == "examine nuggets")
	{
		if(ate)
			$('#game-text').append("<p>No more nugs.</p>");
		else
			$('#game-text').append("<p>Looks like Chik-fil-a. Go ahead and eat them.</p>");
	}
	else if(x == "eat chicken nuggets" || x == "eat nuggets")
	{
		if(ate)
			$('#game-text').append("<p>You ate them all.</p>");
		else
		{
			$('#game-text').append("<p>They're stinkin delicious. You eat every single one.</p>");
			score = score + 10;
			ate = true;
		}
	}
	else if(x == "2656462" || x == "enter 2656462")
		$('#game-text').append("<p>I see what you tried there. Not it, sorry.</p>");
	else if(x == "examine mattress" || x == "examine bed")
		$('#game-text').append("<p>Your run of the mill lumpy mattress. There's a big lump coming from under it.</p>");
	else if(x == "look under mattress" || x == "lift mattress" || x == "examine under mattress" || x == "lift bed" || x == "look under bed")
		$('#game-text').append("<p>You lift the mattress and it reveals a small note.</p>");
	else if(x == "examine note" || x == "read note")
	{
		$('#game-text').append("<p>The note reads, \"The word is: bologna\" </p>");
		note = true;
	}
	else if(x == "examine desk")
		$('#game-text').append("<p>It's made of solid wood. On top of the desk is a rubiks cube, a small whiteboard, and a computer.</p>");
	else if(x == "look under desk" || x == "examine under desk")
		$('#game-text').append("<p>Nothing except some dust and old gum. Also, the number 89.5 is scribbled into one of the desk legs.</p>");
	else if(x == "examine rubiks cube")
		$('#game-text').append("<p>A normal rubiks cube. All the assorted colors. It's not solved yet.</p>");
	else if(x == "examine stick figure" || x == "examine afro")
		$('#game-text').append("<p>Such a flawless hairdo... enviable.</p>");
	else if(x == "solve rubiks cube")
	{
		if(solved)
			$('#game-text').append("<p>You already did that.</p>");
		else
		{
			$('#game-text').append("<p>It takes a good two hours but you succesfully solve the thing. You hear a sound from under you.</p>");
			solved = true;
			score = score + 10;
		}
	}
	else if(x == "examine whiteboard")
	{
		if(erased)
			$('#game-text').append("<p>The remains of the drawing are still there.</p>");
		else
			$('#game-text').append("<p>There's a drawing of a stick figure. It has a most impressive afro. There's an eraser next to the whiteboard.</p>");
	}
	else if(x == "examine eraser")
		$('#game-text').append("<p>Used to erase whiteboards.</p>");
	else if(x == "erase whiteboard")
	{
		if(erased)
			$('#game-text').append("<p>You already did that.</p>");
		else
		{
			$('#game-text').append("<p>You take the eraser and whipe it all away.</p>");
			score = score + 10;
		}
	}
	else if(x == "examine computer")
	{
		if(computerOn)
			$('#game-text').append("<p>A dinosaur PC. It's turned on.</p>");
		else
			$('#game-text').append("<p>A dinosaur PC. It's turned off.</p>");
	}
	else if(x == "turn on computer" || x == "turn computer on")
	{
		if(computerOn)
			$('#game-text').append("<p>It's already on.</p>");
		else
		{
			$('#game-text').append("<p>The computer turns on and relays a message: \"Enter the password:\"</p>");
			computerOn = true;
		}
	}
	else if(x == "enter password")
	{
		if(computerOn)
			$('#game-text').append("<p>Yes, but what is it?</p>");
		else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(x == "bologna" || x == "enter bologna" || x == "enter bologna on computer")
	{
		if(computerOn && note)
			$('#game-text').append("<p>The computer outputs four numbers right as you enter the word in: " + win +"</p>");
		else if(note)
			$('#game-text').append("<p>Yes, that's the word on the note. Anywhere you can put it?</p>");
		else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(x == "sleep" || x == "take a nap" || x == "nap")
	{
		if(nap)
			$('#game-text').append("<p>You already took a nap. Now is not the time to be lazy.</p>");
		else
		{
			$('#game-text').append("<p>You take a quick power nap. You wake up and feel quite refreshed.</p>");
			score = score + 10;
		}
	}
	else if(x == "tune to 89.5")
	{
		if(solved && radio)
		{
			if(music)
				$('#game-text').append("<p>You already did that.</p>");
			else
			{
				$('#game-text').append("<p>You put the radio to 89.5. Classical music station. Its melodies sooth your soul. Absolutely lovely.</p>");
				score = score + 10;
				music = true;
			}
		}
		else
			$('#game-text').append("<p>I didn't understand that.</p>");
	}
	else if(x == win)
	{
		if(keypad)
		{
			$('#game-text').append("<p>You punch the number into the keypad. It slowly opens, revealing the exit.</p>");
			$('#game-text').append("<p>Congratulations! You have escaped.</p>");
			$('#game-text').append("<p>THE END</p>");
			$('#game-text').append("<p>You achieved a score of " + score + " out of a possible 70.</p>"); //put max score here
			$('#game-text').append("<p>Come back when more games and the app are released! Thank you!</p>");
            $('#user-input').prop('disabled', true);
		}
		else
			$('#game-text').append("<p>That's the number the computer gave you. Anywhere you can put it?</p>");
	}
	else if(x == "enter " + win)
	{
		if(keypad)
		{
			$('#game-text').append("<p>You punch the number into the keypad. It slowly opens, revealing the exit.</p>");
			$('#game-text').append("<p>Congratulations! You have escaped.</p>");
			$('#game-text').append("<p>THE END</p>");
			$('#game-text').append("<p>You achieved a score of " + score + " out of a possible 70.</p>"); //put max score here
			$('#game-text').append("<p>Come back when more games and the app are released! Thank you!</p>");
	        $('#user-input').prop('disabled', true);
    	}
    	else
    		$('#game-text').append("<p>Yes but specify where.</p>");
    }
	else
		$('#game-text').append("<p>I didn't understand that.</p>");
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
	})
})