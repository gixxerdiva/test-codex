// frontend/agents/ReportingAgent.ts
// Defines an agent that generates concise reports.
// This file does not handle authentication or storage.

import OpenAI from 'openai';
import { createAgent } from 'openai/agents';
import { FileText } from 'lucide-react';

const openai = new OpenAI();

// Agent for summarizing data into short reports
export const reportingAgent = createAgent({
  client: openai,
  instructions: 'Create short summary reports.',
  model: 'gpt-4-turbo'
});

// Icon to use when showing this agent in React components
export const ReportingIcon = FileText;
