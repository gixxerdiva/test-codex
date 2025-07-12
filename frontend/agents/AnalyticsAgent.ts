// frontend/agents/AnalyticsAgent.ts
// Provides an agent that answers analytics questions.
// This file does not manage API routes or server setup.

import OpenAI from 'openai';
import { createAgent } from 'openai/agents';
import { BarChart } from 'lucide-react';

const openai = new OpenAI();

// Agent specialized in data analytics queries
export const analyticsAgent = createAgent({
  client: openai,
  instructions: 'Answer analytics-related questions.',
  model: 'gpt-4-turbo'
});

// Icon representing analytics functionality
export const AnalyticsIcon = BarChart;
