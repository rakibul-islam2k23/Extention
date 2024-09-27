let isPaused = false;

// Listen for visibility change events
document.addEventListener('visibilitychange', () => {
  const player = document.querySelector('video');

  if (document.visibilityState === 'hidden') {
    // Pause the video when the tab is not visible
    if (player && !player.paused) {
      player.pause();
      isPaused = true;
    }
  } else if (document.visibilityState === 'visible' && isPaused) {
    // Resume playing the video when the tab is visible again
    if (player) {
      player.play();
      isPaused = false;
    }
  }
});
