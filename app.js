
const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body)
	if (note){
		console.log('Note created');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);	
	} else{
		console.log('Note title taken');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note`);
	allNotes.forEach((note) => console.log(`Title: ${note.title}`, `Body: ${note.body}`));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note){
		console.log('Note found');	
	} else{
		console.log('Note not found');
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved? 'Note was removed': 'Note not found';
	console.log(message);
} else {
	console.log('command not recognized')
}


