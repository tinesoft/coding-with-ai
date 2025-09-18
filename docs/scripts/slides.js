import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/dist/sfeir-school-theme.mjs';

function schoolSlides() {
  return [
    "00_intro.md",
    "01_speaker.md",
    "02_agenda.md",
    // add more slides as needed
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
