playSound("assets/category_background/progression.mp3", true);
onEvent("Start", "click", function( ) {
  setScreen("game1");
  playSound("assets/category_instrumental/digital_drum_1.mp3", true);
});
onEvent("js", "click", function( ) {
  setScreen("gameA");
  playSound("assets/category_bell/bells_win_high.mp3", true);
  onEvent("playAgain", "click", function( ) {
    setScreen("screen");
  });
});
onEvent("c", "click", function( ) {
  setScreen("gameB");
  playSound("assets/category_bell/bells_win.mp3", false);
  onEvent("TryAgain", "click", function( ) {
    setScreen("screen");
  });
});
onEvent("Exit_door", "click", function( ) {
  setScreen("exit");
});
onEvent("Return", "click", function( ) {
  setScreen("screen");
  stopSound();
});
