'use server';

import { suggestSkillsForProjects, SuggestSkillsForProjectsInput } from '@/ai/flows/suggest-skills-for-projects';
import { projects } from '@/lib/portfolio-data';

export async function getProjectSkillSuggestions() {
  const input: SuggestSkillsForProjectsInput = projects.map((p) => ({
    projectName: p.name,
    projectDescription: p.description,
  }));

  try {
    const suggestions = await suggestSkillsForProjects(input);
    return suggestions;
  } catch (error) {
    console.error('Error in suggestSkillsForProjects flow:', error);
    // In case of an AI error, return an empty array to prevent crashing the client.
    return [];
  }
}
