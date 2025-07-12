// frontend/agents/DataCleaningAgent.ts
// Defines a simple OpenAI agent that cleans data.
// This file is not meant for complex workflows or UI logic.

import OpenAI from 'openai';
import { createAgent } from 'openai/agents';
import { Broom } from 'lucide-react';

const openai = new OpenAI();

// Agent that focuses on cleaning CSV and JSON data
export const dataCleaningAgent = createAgent({
  client: openai,
  instructions: 'Clean up and normalize data.',
  model: 'gpt-4-turbo'
});

// Lucide icon to represent this agent in the UI
export const DataCleaningIcon = Broom;
