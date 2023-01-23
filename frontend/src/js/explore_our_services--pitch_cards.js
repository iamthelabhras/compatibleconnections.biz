// Confirm this JavaScript file was successfully imported.
console.log("😊 EXPLORE_OUR_SERVICES--PITCH_CARDS.JS: SUCCESSFULLY IMPORTED!!");

// Selects all pitch card question containers on page.
const pitchCardQuestions = document.querySelectorAll(".explore_our_services__pitch_card_question_container");
// Selects all pitch card answer containers on page.
const pitchCardAnswers = document.querySelectorAll(".explore_our_services__pitch_card_answer_container");
// ForEach loop iterator.
let i = 0;

pitchCardQuestions.forEach( question => {
  console.log("➰ EXPLORE_OUR_SERVICES--PITCH_CARDS.JS: IN FOREACH LOOP")
  const answerText = question.closest("div.explore_our_services__pitch_card_container").querySelector(".explore_our_services__pitch_card_answer_container");
  const pitchCardImage = question.closest("div.explore_our_services__pitch_card_container").querySelector("img.explore_our_services__pitch_card_image");
  // Add event listeners to each Pitch Card's question container.
  console.log(`--- PITCH CARD loop iteration: ${i}`);
  console.log(`--- PITCH CARD Adding event listener to pitch card question container ...`)
  question.addEventListener("click", (e) => {
    console.log(`${question.textContent} clicked!`);
    console.log(e);
    question.classList.toggle('explore_our_services__pitch_card_active');
    answerText.classList.toggle('explore_our_services__pitch_card_active');
  })
  console.log(`--- PITCH CARD Done!`);
   // Add event listeners to each Pitch Card's image.
   // This will enhance UX on mobile when Pitch Card question & image are stacked; gives users larger area to clip/tap to "close" Pitch Card answer text.
   console.log(`--- PITCH CARD Adding event listener to pitch card image ...`)
   pitchCardImage.addEventListener("click", (e) => {
     console.log(`${pitchCardImage.alt} clicked!`);
     console.log(e);
     question.classList.toggle('explore_our_services__pitch_card_active');
     answerText.classList.toggle('explore_our_services__pitch_card_active');
   })
   console.log(`--- PITCH CARD Done!`);
   i += 1;
});



