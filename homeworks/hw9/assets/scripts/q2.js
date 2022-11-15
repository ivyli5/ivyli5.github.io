// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById(lightboxID).classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById('lightbox-overlay').classList.toggle('hidden');
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 
/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox('doggo1');
}

// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
document.getElementById('picture-1').onclick = unhideLightbox1
document.getElementById('picture-2').onclick = function () {unhideLightbox('doggo2')}
document.getElementById('picture-3').onclick = function () {unhideLightbox('doggo3')}

// TODO: do the same for #picture-2, write a function and then make it run on click





// TODO: do the same for #picture-3, write a function and then make it run on click






// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById(lightboxID).classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById('lightbox-overlay').classList.toggle('hidden');
}



function closeAllLightboxes() {

	var lightboxElements = document.getElementsByClassName('lightbox');


	for (var i = 0; i < lightboxElements.length; i++) {

		var id = lightboxElements[i].id;

		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes
