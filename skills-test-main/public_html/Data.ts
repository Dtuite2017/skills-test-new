import * as fs from 'fs';// Missing Import

class Data {
	id: string;
	type: string;
	examples: {
		[id: string]: string[],
	};
	version: number;

	constructor ( id: string ) {
		this.id = id;
                this.type = '';
                this.examples = {}; // Initialize examples
                this.version = 1; // Initialize version
  };

  saveEntries = (examples: { [id: string]: string[] }) => { //save entries should be saved as object not string array
	  try {
		  const saveData: {
			  id: this.id,
			  type: this.type,
			  version: this.version,
			  examples,
		  };

		  fs.writeFileSync(
			  '/tmp/file.json',
        JSON.stringify( saveData, null, 4 ),			
		  );
	  } catch ( ex ) {
		  console.log( ex.message );
	  }
  };

  readEntries = () => {
	  try {
		  const loadData: string = fs.readFileSync( '/tmp/file.json', 'utf-8' );//incorrect quotes also use utf-8 so string properly read 
		  const parsedFile: {
			  id: string,
			  type: string,
			  examples: {
				[id: string]: string[] // incorrect type
			  },
			  version: number,
		  } = JSON.parse( loadData );

		  this.id = parsedFile.id;
		  this.version = parsedFile.version;
		  this.type = parsedFile.type;
		  this.examples = parsedFile.examples;
	  } catch ( ex ) {
		  console.log( ex.name );
	  }
  };
}


// Highlight bugs (if any)
// Question :- Will this code run if this was Javascript and Typescript
// The code wouldnt run directly due to the fact that there are certain typescript
// specific declarations that would not run in javascript we would need to adjust
// the code accordingly for it to function as expected.
