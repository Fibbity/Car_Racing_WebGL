

	var file = loadFile("file://~/models/car.obj")

	var reader = new FileReader();

	reader.onload = function( progressEvent ){

	// Entire file read as a string
	
	// The file lines
	
	lines = text.split('\n');
	
	// The new vertices
	
	var newVertices = [];
	
	// The new normal vectors
	
	var newNormals = [];

	// The new face vectors
	
	var newFaces = [];

	// The new face vectors

	var newColors = [];
	
	// Check every line and store 

	for(var line = 0; line < lines.length; line++){

		// The tokens/values in each line

	    // Separation between tokens is 1 or mode whitespaces

	    var tokens = lines[line].split(/\s\s*/);
	    
	    // Array of tokens; each token is a string
	    
	    if( tokens[0] == "v" ) 
	    {
			// For every vertex we have 3 floating point values

			for( j = 1; j < 7; j++ ) {
				if (j < 4)
					newVertices.push( parseFloat( tokens[ j ] ) );
				else
					newColors.push( parseFloat( tokens[ j ] ) );
			}
		}

		if( tokens[0] == "vn" ) 
		{
			// For every normal we have 3 floating point values

			for( j = 1; j < 4; j++ ) {

				newNormals.push( parseFloat( tokens[ j ] ) );
			}
		}

		if( tokens[0] == "f" ) 
		{
			// For every normal we have 3 floating point values

			for( j = 1; j < 4; j++ ) {

				newFaces.push( parseFloat( tokens[ j ] ) );
			}
		}
	}	

	// Assigning to the current model
	
	vertices = newVertices.slice();
	
	normals = newNormals.slice();

	vertexIndices = newFaces.slice();

	colors = newColors.slice();

	console.log(colors);
	
	// Checking to see if the normals are defined on the file
	
	if( normals.length == 0 )
	{
		computeVertexNormals( vertices, normals );
	}

	return [vertices, vertexIndices, normals, colors];
}
