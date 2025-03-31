
  var instructions = [];
  const style1 ="font-size:20px";
  var inst1_incorrect = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"<br><br> Some of your answers were incorrect. We repeat part of the instructions. Please pay attention!</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  // var inst2_incorrect = {
  //   type: 'instructions',
  //   pages: [
  //       '<p style="font-size:20px"<br><br> We have to terminate the game here because some of your answers were incorrect for the second time. <br><br> Please return your submission by closing the survey and choosing "Stop Without Completing" on prolific.</p>',
  //   ],
  //   show_clickable_nav: true,
  //   button_label_previous: "Prev",
  //   button_label_next: "Next"
  // };
  var inst3_incorrect = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"<br><br> You did not respond. <br><br> We have to terminate the game here.</p>',
    ],
    show_clickable_nav: false,
  };

  var inst1 = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"><img src="../static/img/imga1.png" width=40%></img> <br><br><br> In this game, birds drop bags of coins and you should try to catch as many coins as you can by moving your bucket.</p>',
        '<p style="font-size:20px"><img src="../static/img/imga2.png" width=40%></img> <br><br><br> In the beginning you do not see the bird. You should guess its position based on your previous experiences.</p>',
        '<p style="font-size:20px"><img src="../static/img/imga2.png" width=40%></img> <br><br><br> You should use right and left arrow keys to move the bucket.</p>',
        '<p style="font-size:20px"<br><br> Now give it a try. Make a response by using the left or right arrow keys.</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var inst2 = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"><img src="../static/img/imgb1.png" width=40%></img> <br><br><br> After you position the bucket, the screen darkens a bit. At this time you cannot move the bucket.</p>',
        '<p style="font-size:20px"><img src="../static/img/imgb2.png" width=40%></img> <br><br><br> Then you see the bird dropping a bag of coin.</p>',
        '<p style="font-size:20px"><img src="../static/img/imgb3.png" width=40%></img> <br><br><br> The bag explodes near the earth and coins fall.</p>',
        '<p style="font-size:20px"><img src="../static/img/imgb3.png" width=40%></img> <br><br><br> Your bonus depends on the number of coin that you collect in your bucket.</p>',
        '<p style="font-size:20px"><img src="../static/img/imga2.png" width=40%></img> <br><br><br> A new trial begins when the screen lights up again. You can then move the bucket again.</p>',
        '<p style="font-size:20px"><img src="../static/img/imga2.png", left = 20%, width=20%></img> <p style="font-size:20px"><img src="../static/img/imgb1.png", left=20%, width=20%></img> <br><br> Remember: when the screen is clear (like the top image) you can move the bucket. When it is opaque (like the bottom), the bucket is frozen.</p>',
        '<p style="font-size:20px"> If you do not move the bucket on one or two trials, we assume you are happy with its position. <br><br> But you should not leave the bucket in one place for a long time. If you do, we notify you, and if you persist, we might end the game early!</p>',
        '<p style="font-size:20px"> Now give it a try. Try to see yourself that you can only move your bucket when the screen is clear.</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var inst3 = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"> The bag will fall near the bird, but the exact position will be random because it is a windy day!</p>',
        '<p style="font-size:20px"><img src="../static/img/imgc1.png" width=40%></img> <br><br><br> The bag might fall in front of the bird,</p>',
        '<p style="font-size:20px"><img src="../static/img/imgc2.png" width=40%></img> <br><br><br> or it might fall just under the bird,</p>',
        '<p style="font-size:20px"><img src="../static/img/imgc3.png" width=40%></img> <br><br><br> or it might fall behind the bird.</p>',
        '<p style="font-size:20px">You may also have noticed that the bird also moves randomly. The best guess for its new position is its position on the previous trial.</p>',
        '<p style="font-size:20px"><img src="../static/img/imgd1.png" width=40%></img> <br><br><br> If this is its current position,</p>',
        '<p style="font-size:20px"><img src="../static/img/imgd2.png" width=40%></img> <br><br><br> On the next trial, it could be here,</p>',
        '<p style="font-size:20px"><img src="../static/img/imgd3.png" width=40%></img> <br><br><br> or here.</p>',
        '<p style="font-size:20px"><strong>Your best strategy is to position the bucket directly in the place that you saw the bird on the previous trial.</p>',
        '<p style="font-size:20px"> Now that you know how the game works, try a few trials paying attention to how the bird moves and where the bag falls.</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var inst4 = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"> We are almost ready for the full game, but there is one important differnece. <br>In the real game, you do not see the bird because it is foggy up there!</p>',
        '<p style="font-size:20px"><img src="../static/img/imge1.png" width=40%></img> <br><br> Here it is foggy, but you can still see the bird. <br>The bird is still flying around and dropping bag of coins just like before.</p>',
        '<p style="font-size:20px">In the actual game, you do not see the bird at all. You only see the coin bags.</p>',
        '<p style="font-size:20px">Everything else is exactly the same as before. But you have to try to figure out where the bird is. <br><br> Now you can practice a few trials just to see what the game is like.</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var inst5 = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"> You play against four different birds with different behavior and in four different windy conditions.</p>',
        '<p style="font-size:20px"> We let you know when the bird and wind condition change.</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var ready = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"> We are now beginning the game.<br><br>Good luck!</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var quiz = {
    type: 'instructions',
    pages: [
        '<p style="font-size:20px"> We now ask you some questions about the game. You should answer all of them correctly to proceed.<br><br>Good luck!</p>',
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next"
  };
  var num_loops = 0;
  var comprehension1 = {
    type: 'comprehension1',
  };

  var comprehension2 = {
    type: 'comprehension2',
  };
