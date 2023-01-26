import {toHTML} from '@portabletext/to-html';

console.log("Sanity JS script loaded.");

const PROJECT_ID = "0nvd9l6m";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "dating_tip"]');

// Compose the URL for your project's endpoint and add the query
const SANITY_QUERY = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const sanityJSON= await fetch(SANITY_QUERY)
  .then(sanityQuery=> sanityQuery.json())
  .catch(sanityError => console.error(sanityError));

const datingTips = sanityJSON.result;
const DOM = document.querySelector("#dating-tips__tips_container");

// Clear statically generated HTML on page load.
DOM.innerHTML = "";

let html = "";

datingTips.map(tip =>  {
  // Remove statically generated HTML on page load.
  // Preprocess tip image URL for DOM injection.
  let imageRefSplit = tip.tipImage.asset._ref.split('-');
  let imageURL = `${imageRefSplit[1]}-${imageRefSplit[2]}.${imageRefSplit[3]}`;
  // Preprocess tip text for DOM injection.
  let tipText= toHTML(tip.tipText);
  // Build up HTML for DOM injection for each dating tip.
  html += `
    <div 
      class="image_modal__container">
  `;
  html += `
    <a 
      class="utility_classes__reset image_modal__open"
      href=#${tip.tipSlug.current}-fullscreen>
  `
  ;
  html += `
    <div 
      class="image_modal__thumbnail"
      id=${tip.tipSlug.current}>
  `;
  html += `
    <h2>${tip.tipTitle}</h2>
  `;
  html += `
    <img
      class="dating-tips__thumbnail"
      src=https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${imageURL}
      alt="${tip.tipImageAlt}"/>
  `;
  html += `
    </div>
  `;
  html += `
    </a>
  `;
  html += `
    <div
      class="image_modal__full_screen_bg"
      id=${tip.tipSlug.current}-fullscreen>
  `;
  html += `
    <div class="image_modal__full_screen">
  `;
  html += `
    <a 
      href=#${tip.tipSlug.current}
      class="utility_classes__reset image_modal__close dating-tips__thumbnail_link">
    </a>
  `;
  html += `
    <div 
      class="dating-tips__full_screen"
      loading="lazy">
  `;
  html += `
    <h2>${tip.tipTitle}</h2>
  `;
 html += `
    ${tipText}
  `;
  html += `
    </div>
  `;
  html += `
    <a
      href=#${tip.tipSlug.current}
      class="utility_classes__reset button">
  `;
  html += `
    Close This Tip
  `;
  html += `
    </a>
  `;
  html += `
    </div>
  `
  html += `
    </div>
  `;
  html += `
    </div>
  `;
  DOM.innerHTML += html;
  html = "";
  }
);