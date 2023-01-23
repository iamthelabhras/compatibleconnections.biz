# CC.BIZ 3.0 ASTRO REBOOT PROJECT OVERVIEW


## Astro Components


### ButtonLink.astro

### ButtonSchedule.astro

### CardTextFancy.astro

### CardLetsConnect.astro

### CardPlain.astro

### Checkbox.astro

### DottedUL.astro

### Footer.astro
#### Taskwarrior | project:coding.ccBizAstro.components.footer
* [ ] Figure out why identical CSS targeting social icons in Header & Footer isn't properly sizing Footer social icons. || +bug  #aa682cd3
* [ ] Refactor CSS to remove any !important rules.  #678b30f5

### Header.astro
####  Taskwarrior | project:coding.ccBizAstro.components.header
* [ ] Fix response layout / media query issues.  #bbdeeb4d

### HeadMinimum.astro

### Headstatic.astro
####   Taskwarrior| project:coding.ccBizAstro.components.headStatic
* [ ] Confirm cc_logo.png is working properly.  #75e19a3e
* [ ] Figure out which fonts to preload.  #036990b2
* [ ] Create <meta> tags for site page Twitter Cards  #81c1789c
* [ ] Verify website ownership with relevent search engines & update <meta> tags.  #2e608dee
    * [ ] Google site verification.  #cc5117bf
    * [ ] Norton Safe Web verification.  #1d6911f0
    * [ ] Yandex verification.  #b5ec8ec3
    * [ ] Pinterest console.  #681326f3
    * [ ] MSValidate / Bing verification.  #e47a36e2
    * [ ] Alexa Console verification.  #7ae1f77c


## Astro Pages

### index.astro (Main Page)

####  Taskwarrior | project:coding.ccBizAstro.pages.main
* [X] Reimplement Coach Bernadette floating hearts in Vanilla JS.  #8845f9ed


### Services (All Pages)

#### Taskwarrior | project:coding.ccBizAstro.pages.services.all
* [X] Create ServicesPitchCardLinks page-specific component.  #7d799ae6
* [ ] Resize <h1> on mobile.  #6cfff7cb

##  Astro Page-Specific Components

### ServicesHeadline.astro

####  Taskwarrior | project:coding.ccBizAstro.pages.services.servicesHeadline
* [ ] Fix Coach Bernadette <img> on-wrap (1085px).  #af626dda


### ServicesPitchCard.astro

#### Taskwarrior | project:coding.ccBizAstro.pages.services.servicesPitchCard
* [ ] Fix pitch card <img> sizing (1024px).  #fcd5a2bf
* [ ] Resize pitch card questions on mobile.  #130ab7c9
* [ ] Address pitch question text wrapping on mobile.  #1db37841
* [ ] Reconfigure event listener so that question or img click toggles active class on mobile.  #dba6c346
* [ ] Remove gray background below pitch question's dotted line on mobile.  #90b1bc2b


### ServicesLinks.astro

####  Taskwarrior | project:coding.ccBizAstro.pages.services.servicesLinks
* [ ] Janky transitions within pitch cards.  #c2c81e1b
* [ ] <ul> and <li> styling within pitch cards.  #ba8ba234
* [ ] <ul> and <li> styling below Services Headline.  #fcbf2034
* [ ] Restyle links container on-wrap (1199px).  #cc7e9e16
* [ ] Add top-margin to pitch card links on mobile-stacked view.  #a10f8fba

####  Dev Notes

One-on-one Coaching Questions

*   **Does This Sound Like You?**                           `#like_you`
*   What Can Coaching Do For You?                       `#for_you`
*   What Is Coaching?                                   `#question_3`
*   What Happens During A One-on-One Coaching Session?  `#question_4`
*   Is There A Professional Designation For Coaches?    `#question_5`
*   **How Much Does This Cost?**                            `#how_much`
*   **I'm Interested!  What Are My Next Steps?**            `#next_steps`

PWYF

*   **Does This Sound Like You?**                        `#like_you`
*   This Series Is For You If...                     `#for_you`
*   By The End Of This Series You Will...            `#question_3`
*   What Can This Series Do For You?                 `#question_4`    **REDUDANT**    
*   How Is Partner With Yourself First Delivered?    `#question_5`
*   **How Much Does This Cost?**                         `#how_much`
*   **I'm Interested What Are My Next Steps?**           `#next_steps`

SSS

*   **Does This Sound Like You?**                        `#like_you`
*   This Series Is For You If...                     `#for_you`
*   By The End Of This Series You Will...            `#question_3`
*   What Can This Series Do For You?                 `#question_4`   **REDUDANT**    
*   How Is Seek, Sort, & Select First Delivered?     `#question_5`
*   **How Much Does This Cost?**                         `#how_much`
*   **I'm Interested What Are My Next Steps?**           `#next_steps`


