'use server';

/**
 * @fileOverview This file defines a Genkit flow that suggests which skills are demonstrated by each project in the project gallery.
 *
 * - suggestSkillsForProjects - A function that takes a list of projects and their descriptions, and suggests which skills are demonstrated by each project.
 * - SuggestSkillsForProjectsInput - The input type for the suggestSkillsForProjects function.
 * - SuggestSkillsForProjectsOutput - The return type for the suggestSkillsForProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsForProjectsInputSchema = z.array(z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project, including its purpose, technologies used, and key features.'),
  skills: z.array(z.string()).optional().describe('A list of skills that might be used in the project.')
})).describe('An array of projects, each with a name and description.');

export type SuggestSkillsForProjectsInput = z.infer<typeof SuggestSkillsForProjectsInputSchema>;

const SuggestSkillsForProjectsOutputSchema = z.array(z.object({
  projectName: z.string().describe('The name of the project.'),
  suggestedSkills: z.array(z.string()).describe('A list of skills suggested to be demonstrated by the project, based on its description.'),
}));

export type SuggestSkillsForProjectsOutput = z.infer<typeof SuggestSkillsForProjectsOutputSchema>;

export async function suggestSkillsForProjects(input: SuggestSkillsForProjectsInput): Promise<SuggestSkillsForProjectsOutput> {
  return suggestSkillsForProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSkillsForProjectsPrompt',
  input: {schema: SuggestSkillsForProjectsInputSchema},
  output: {schema: SuggestSkillsForProjectsOutputSchema},
  prompt: `You are an expert AI assistant specializing in identifying the skills demonstrated by software projects.

Given a list of projects with their descriptions, your task is to suggest which skills are demonstrated by each project.

Here's the list of projects:

{{#each this}}
  Project Name: {{projectName}}
  Description: {{projectDescription}}
{{/each}}

Based on these descriptions, suggest the skills demonstrated by each project.

Return the output as JSON in the following format:

[
  {
    "projectName": "Project Name",
    "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    "projectName": "Another Project Name",
    "suggestedSkills": ["Skill A", "Skill B", "Skill C"]
  }
]
`,
});

const suggestSkillsForProjectsFlow = ai.defineFlow(
  {
    name: 'suggestSkillsForProjectsFlow',
    inputSchema: SuggestSkillsForProjectsInputSchema,
    outputSchema: SuggestSkillsForProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
