const video = document.getElementById('videoSis');
    let isPlaying = false;

    // Listen for keydown events on the document
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 16 || event.keyCode === 82 || event.keyCode === 32) {
        // Shift, R, or Spacebar is pressed
        if (!isPlaying) {
          video.play();
          isPlaying = true;
        }
      }
    });

    // Listen for keyup events on the document
    document.addEventListener('keyup', function(event) {
      if (event.keyCode === 16 || event.keyCode === 82 || event.keyCode === 32) {
        // Shift, R, or Spacebar is released
        if (isPlaying) {
          video.pause();
          isPlaying = false;
        }
      }
    });