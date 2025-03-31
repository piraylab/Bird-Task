/**
 *
 *
 **/


jsPsych.plugins["trial"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'trial',
    description: '',
    parameters: {
      dummy: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'dummy',
        default: null,
        description: 'starting location'
      },
      terminate_now: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: false,
      },
      show_missing: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: false,
      },
      show_bird: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: false,
      },
      is_moving_practice: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: false,
      },
      canvas_size: {
        type: jsPsych.plugins.parameterType.INT,
        array: true,
        pretty_name: 'Canvas size',
        default: [2000, 2000],
        description: 'Array containing the height (first value) and width (second value) of the canvas element.'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: [32, 37,39],
        description: 'Keys corresponding to each context (left, right, down).'
      },
      strong_warning: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: false,
      },
      missing_msg_warning_number: {
        type: jsPsych.plugins.parameterType.BooL,
        array: false,
        default: 15,
      },
      bucket_position: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: null,
        description: 'location of the bucket.'
      },
      stayed: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: 1,
        description: '0 is the bucket is mvoed in this trial, otherwise 1.'
      },
      coins_distribution: {
        type: jsPsych.plugins.parameterType.INT,
        array: true,
        pretty_name: 'distribution of coins',
        default: [-10, -5, 0, 5, 10],
        description: 'distribution of coins.'
      },
      coins_duration: {
        type: jsPsych.plugins.parameterType.INT,
        array: true,
        default: [600, 400, 0, 400, 600],
        description: 'falling duration of coins.'
      },
      bag_position: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'x of coin bag',
        default: 35,
        description: 'x of coin bag'
      },
      bird_position: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: null,
        description: 'x of the bird'
      },
      no_response_duration: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: 1500,
      },
      response_remaining_duration: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: 2000,
      },
      drop_duration: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: 2500,
      },
      missing_duration: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        default: 10000,
      },
    }
  }

  var make_html = function(trial) {
    var new_html = '<div id="jspsych-canvas-keyboard-response-stimulus">' + '<canvas id="jspsych-canvas-stimulus" height="' + trial.canvas_size[0] + '" width="' + trial.canvas_size[1] + '"></canvas>' + '</div>';

    trial.dummy = trial.coins_distribution.length;

    new_html += `<style>
    body {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      position: fixed;
      background-color: #fdfdfd;
    }
    </style>`;

    new_html += `<div class="game-container">`;

    // const context = 'red';
    // Open beach container.
    new_html += `<div class="main-container">`;

    // new_html += '<p style="font-size: 20px; line-height: 1.5em">x is ' + trial.dummy;

    // Add landscape.
    new_html += '<div class="sky1"></div>';
    new_html += '<div class="land1"></div>';
    new_html += '<div class="land2"></div>';
    new_html += `<div class="star" pattern="1"></div>`;
    new_html += `<div class="star" pattern="2"></div>`;
    new_html += `<div class="star" pattern="3"></div>`;

    new_html += `<div class="moon" id="moon"></div>`;
    new_html += '<div class="light1" id="light"></div>';
    new_html += `<div class="bucket1" id="bucket"></div>`;
    new_html += `<div class="bucket2" id="bucket2"></div>`;

    new_html += `<div class="expl1" id="expl"></div>`;
    new_html += `<div class="bag" id="bag"></div>`;
    new_html += `<div class="bird" number="0", id="birdy"></div>`;

    for (var i = 0; i < trial.coins_distribution.length; i++) {
      new_html += `<div class="gold" id="gold${i}"></div>`;
    }
    new_html += '</div>';
    new_html += '</div>';

    return new_html;
  };


  var move_bucket = function(trial, info) {
    let key = info.key;

    var bucket = document.getElementById("bucket");
    var x = trial.bucket_position;
    var step = 2;

    if (key == 39) {
      x = x + step;
    } else if (key == 37) {
      x = x- step;
    };

    var y = x;
    if (x > 90) {
      y = 90;
    } else if (x < 10) {
      y = 10;
    }

    bucket.style.left = y + "%";
    var bucket2 = document.getElementById("bucket2");
    bucket2.style.left = y + "%";

    // const msg = '<p style="font-size: 20px; line-height: 1.5em">x is ' + x;
    // display_element.innerHTML = msg;
    trial.bucket_position = y;

    return trial;
  }; // end of move_bucket

  var gold_drop = function(trial) {

    var coins_duration = trial.coins_duration;

    var half_coins = (trial.coins_distribution.length-1)/2;
    for (var i = 0; i < trial.coins_distribution.length; i++) {
      var coin = document.getElementById("gold"+ (i));
      coin.style.left = trial.bag_position + trial.coins_distribution[i] + "%";

      if ( i<half_coins) {
        coin.style.animation="drop_left";
      } else if ( i> half_coins) {
        coin.style.animation="drop_right";
      } else if (i == half_coins) {
        coin.style.animation="drop";
      }

      var dur = coins_duration[i];
      coin.style.setProperty("animation-duration", dur + "ms")
      // coin.style.opacity = "100%";
      coin.style.setProperty("animation-timing-function", "cubic-bezier(.7,.3,1,1)");
    };
    var bucket2 = document.getElementById("bucket2");
    bucket2.style.opacity = "100%";
  }; // end of gold_drop

  var fly = function(trial) {
  // first drop the bag
  // then explode
  // and finally gold

  let initial_duration = 300;
  let bag_duration = 1100;
  let explode_animation = 300;
  let gold_initialization = 200;
  let explode_duration = 1000 + gold_initialization;

  var light = document.getElementById("light");
  light.style.opacity = "30%";

  var moon = document.getElementById("moon");
  moon.style.opacity = "30%";

  setTimeout(function() {
    if (trial.show_bird) {
      var bird = document.getElementById("birdy");
      bird.style.left = trial.bird_position + "%";
      bird.style.visibility = "visible";
    }

    var bag = document.getElementById("bag");
    bag.style.left = trial.bag_position + "%";
    bag.style.animation="bagdrop";
    // bag.style.opacity = "100%";
    bag.style.setProperty("animation-duration", bag_duration + "ms");
    bag.style.setProperty("animation-timing-function", "ease-in");
  }, initial_duration);

  setTimeout(function() {
    bag.style.visible = "hidden";
    var expl = document.getElementById("expl");
    expl.style.left = trial.bag_position + "%";
    expl.style.animation="explode";
    expl.style.setProperty("animation-duration", explode_animation + "ms");
    gold_drop(trial);

    // setTimeout(function() {
    //   gold_drop(trial);
    // }, gold_initialization);

  }, initial_duration+explode_duration);
}; // end of fly

  plugin.trial = function (display_element, trial) {

    if (trial.terminate_now) {
      setTimeout(function() {
        end_trial(2);
      }, 1);
    };

    if (trial.is_moving_practice) {
      trial.no_response_duration = 5000;
    };

    new_html = make_html(trial);
    display_element.innerHTML = new_html;

    var bucket = document.getElementById("bucket");
    var bucket2 = document.getElementById("bucket2");
    bucket.style.left = trial.bucket_position + "%";
    bucket2.style.left = trial.bucket_position + "%";

    var after_response = function(info) {

      // trial.number_responses = trial.number_responses + 1;
      // let rts = trial.rts;
      // rts.push(key);
      // trial.rts = rts;

      trial = move_bucket(trial,info);
    };

    var after_1st_response = function(info) {
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener1);

      trial.stayed = 0;
      trial = move_bucket(trial,info);

      // setTimeout(function() {
      // }, 10);
      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: true,
        allow_held_key: true
      });

      setTimeout(function() {
        jsPsych.pluginAPI.cancelAllKeyboardResponses();
        if (!trial.is_moving_practice) {
          fly(trial);
        }
        jsPsych.pluginAPI.setTimeout(function() {
          end_trial(1);
        }, trial.drop_duration);
      }, trial.response_remaining_duration);

    }; // end of after_1st_response


    // the listener for the very 1st response (persist is false here and callback is after_1st_response)
    setTimeout(function() {
      jsPsych.pluginAPI.cancelAllKeyboardResponses;
      keyboardListener1 = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_1st_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: true,
      });
    }, 20);

    var missed_response = function() {

      // Kill all setTimeout handlers.
      // jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Display warning message.

      var msg = '<p style="font-size: 20px; line-height: 1.5em">Are you there? You have not moved the bucket for a long time.<br><br>Please pay more attention and play with your bucket, otherwise we may end the exepriment early and reject your work.';
      if (trial.strong_warning) {
        msg = '<p style="font-size: 20px; line-height: 1.5em">Are you there? You have not moved the bucket for a long time.<br><br>We have warned you for more than ' + trial.missing_msg_warning_number + ' times. <br><br> <b>Warning: we are about to reject your work!</b>';
      }
      if (trial.is_moving_practice) {
        msg = '<p style="font-size: 20px; line-height: 1.5em">Are you there? You should try to move the bucket using left and right arrow keys.<br><br>Please pay more attention and move the bucket, otherwise we will end the game here!';
      };

      display_element.innerHTML = msg;
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial(0);
      }, trial.missing_duration);

    }; // end of missed_response

    // function to end trial when it is time
    var end_trial = function(completed) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // gather the data to store for the trial
      var trial_data = {
        "bird_position": trial.bird_position,
        "bag_position": trial.bag_position,
        "bucket_position": trial.bucket_position,
        "completed": completed,
        "stayed": trial.stayed,
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    }; // end of end_trial

    jsPsych.pluginAPI.setTimeout(function() {
      if (trial.show_missing) {
        missed_response();
      } else {
        jsPsych.pluginAPI.cancelAllKeyboardResponses();
        if (!trial.is_moving_practice) {
          fly(trial);
        }
        jsPsych.pluginAPI.setTimeout(function() {
          end_trial(1);
        }, trial.drop_duration);
      };
    }, trial.no_response_duration);



  }; // end of plugin.trial

  return plugin;
})();
