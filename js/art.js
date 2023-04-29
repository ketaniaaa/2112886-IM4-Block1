const video = document.getElementById('videoSis');
    let isPlaying = false;

    
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 16 || event.keyCode === 82 || event.keyCode === 32) {
  
        if (!isPlaying) {
          video.play();
          isPlaying = true;
        }
      }
    });

   
    document.addEventListener('keyup', function(event) {
      if (event.keyCode === 16 || event.keyCode === 82 || event.keyCode === 32) {
    
        if (isPlaying) {
          video.pause();
          isPlaying = false;
        }
      }
    });