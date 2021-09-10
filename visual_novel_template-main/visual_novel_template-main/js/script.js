/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    '' : {
        project: '<a href="https://github.com/dkessner/visual_novel_template" target="_blank">https://github.com/dkessner/visual_novel_template</a>',
        'Monogatari visual novel engine': '<a href="https://monogatari.io/" target="_blank">https://monogatari.io</a>'
    }
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    alice23: "Lewis-Carroll-Alice-Under-Ground-23.jpg",
    alice24: "Lewis-Carroll-Alice-Under-Ground-24.jpg",
		wilburMom: "wilburMom.jpg",
		wilbur1: "wilbur1.png"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({

});


monogatari.script ({

	'Start': [
            'show image wilbur1 with fadeIn',
            "Hi folks, it's me, Wilbur! I'm back, and I'm here to reveal my mysterious backstory.",
            "Let's start at the beginning...",
            'hide image wilbur1 with fadeOut',
            'jump Next'
        ],

        'Next': [
            'show image wilburMom with fadeIn',
            "First, there was nothing. Then, I was born. Yup, the universe began when I was born.",
            "How did my mom give birth to me when the universe started with my birth? I don't know, don't ask questions.",
						"That's me as a baby, of course, I was an only child because the world revolves around me.",
            'hide image wilburMom with fadeOut',
				],

				'Next': [
            'show image wilburMom with fadeIn',
            "First, there was nothing. Then, I was born. Yup, the universe began when I was born.",
            "How did my mom give birth to me when the universe started with my birth? I don't know, don't ask questions.",
						"That's me as a baby, of course, I was an only child because the world revolves around me.",
            'hide image wilburMom with fadeOut',
				],

				'Next': [
            'show image wilburMom with fadeIn',
            "First, there was nothing. Then, I was born. Yup, the universe began when I was born.",
            "How did my mom give birth to me when the universe started with my birth? I don't know, don't ask questions.",
						"That's me as a baby, of course, I was an only child because the world revolves around me.",
            'hide image wilburMom with fadeOut',
            'end'
				]
});


monogatari.component ('main-screen').template (() => {
    return `
        <h1>The Story of Wilbur</h1>
        <br/>
        <p>
        Discover the backstory of your favorite pig.
        </p>
        <br/>
        <center>
        <img src="assets/images/wilbur1.png" height="100%"/>
				<p></p> <p></p> <p></p>
        </center>

        <main-menu></main-menu>
    `;
});
