import type { JourneyContent, JourneyStage, JourneyCardEntry } from '../data/journey';

export type JourneySlide =
  | { type: 'fool'; cardId: string; blurb: string }
  | { type: 'stageIntro'; stageIndex: number; stage: JourneyStage }
  | { type: 'card'; stageIndex: number; stage: JourneyStage; entry: JourneyCardEntry };

export function buildJourneySlides(journey: JourneyContent): JourneySlide[] {
  const slides: JourneySlide[] = [{ type: 'fool', cardId: journey.fool.cardId, blurb: journey.fool.blurb }];
  journey.stages.forEach((stage, stageIndex) => {
    slides.push({ type: 'stageIntro', stageIndex, stage });
    stage.cards.forEach(entry => {
      slides.push({ type: 'card', stageIndex, stage, entry });
    });
  });
  return slides;
}

export function stageStartSlideIndex(journey: JourneyContent, stageIndex: number): number {
  return buildJourneySlides(journey).findIndex(s => s.type === 'stageIntro' && s.stageIndex === stageIndex);
}
