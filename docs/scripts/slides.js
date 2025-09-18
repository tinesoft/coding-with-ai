import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/dist/sfeir-school-theme.mjs';

function schoolSlides() {
  return [
    "00_intro.md",
    "01_speaker.md",
    "02_agenda.md",
    "10_module1_intro.md",
    "11_ai_fundamentals.md",
    "12_prompt_engineering.md",
    "13_exercise_prompts.md",
    "20_module2_intro.md",
    "21_ai_tools_landscape.md",
    "22_copilot_setup.md",
    "23_autonomous_agents.md",
    "24_exercise_tools.md",
    "30_module3_intro.md",
    "31_agentic_workflows.md",
    "32_spec_driven_coding.md",
    "33_vibe_coding.md",
    "34_exercise_workflows.md",
    "40_module4_intro.md",
    "41_ai_debugging.md",
    "42_refactoring_ai.md",
    "43_code_analysis.md",
    "44_exercise_debugging.md",
    "50_module5_intro.md",
    "51_test_automation.md",
    "52_quality_assurance.md",
    "53_exercise_testing.md",
    "60_module6_intro.md",
    "61_code_review_ai.md",
    "62_security_basics.md",
    "63_governance.md",
    "64_exercise_review.md",
    "70_module7_intro.md",
    "71_project_planning.md",
    "72_project_execution.md",
    "73_project_showcase.md"
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
