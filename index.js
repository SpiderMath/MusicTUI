const { readdirSync } = require('fs');
const { directory } = require('./config.json');
const Fuse = require('fuse.js');

const music = readdirSync(directory)
	.map((fileName) => {
		fileName = fileName.slice(0, -4);
		const [artist, ...songName] = fileName.split('-');
		return {
			artist,
			songTitle: songName.join(' '),
		}
	});

const fuse = new Fuse(
	music,
	{
		keys: [
			'artist', 'songTitle',
		],
	},
);

console.log(fuse.search('AJR'));