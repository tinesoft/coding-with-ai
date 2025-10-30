import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/dist/sfeir-school-theme.mjs';

function schoolSlides() {
  return [
    "00_intro.md",
    "01_speaker.md",
    "02_agenda.md",
    // Module 1: Introduction to AI and Prompt Engineering
    "10_module_1_ai_fundamentals/10_module1_intro.md",
    "10_module_1_ai_fundamentals/11_ai_fundamentals.md",
    "10_module_1_ai_fundamentals/12_prompt_engineering.md",
    "10_module_1_ai_fundamentals/13_exercise_prompts.md",
    "10_module_1_ai_fundamentals/14_tools_and_agents.md",
    "10_module_1_ai_fundamentals/15_assessment_and_recap.md",
    // Module 2: Modern AI Coding Tools
    "20_module_2_ai_tools/20_module2_intro.md",
    "20_module_2_ai_tools/21_tools_landscape.md",
    "20_module_2_ai_tools/22_copilot_deep_dive.md",
    "20_module_2_ai_tools/23_model_comparison.md",
    "20_module_2_ai_tools/24_agent_instructions.md",
    "20_module_2_ai_tools/25_assessment_and_recap.md",
    // Module 3: AI-Powered Debugging, Refactoring, and Verification
    "30_module_3_debugging/30_module3_intro.md",
    "30_module_3_debugging/31_debugging_concepts.md",
    "30_module_3_debugging/32_debugging_workflow.md",
    "30_module_3_debugging/33_refactoring_ai.md",
    "30_module_3_debugging/33_code_verification.md",
    "30_module_3_debugging/34_exercise_debugging.md",
    "30_module_3_debugging/35_exercise_refactoring.md",
    "30_module_3_debugging/36_exercise_verification.md",
    "30_module_3_debugging/37_assessment_and_recap.md",
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
