const test_form = jsPsych.randomization.sampleWithoutReplacement(['a','b'], 1)

// Define instructions
var rpm_instructions = {
  type: 'instructions',
  pages: [
    "<p>We are beginning the <b>puzzle task</b>.</p><p>In this task, you will be shown a series of puzzles. For each puzzle, your goal is to<br>identify the missing piece from the options appearing below the puzzle.</p>",
    '<p>There are 9 puzzles in total. You will have <b>30 seconds</b> for each puzzle.</p><p>Try to be as accurate as you can be. If you cannot solve the puzzle before time runs out, then you should guess.</p><p>Press the "next" button to get started.</p>',
  ],
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

// Initialize timeline.
var rpm_timeline = [];
rpm_timeline = rpm_timeline.concat(rpm_instructions);
rpm_timeline = rpm_timeline.concat((test_form == "a") ? RPM_TFa : RPM_TFb);

var preload_rpm_images = (test_form == "a") ? preload_rpm_tfa : preload_rpm_tfb;
