// frontend/agents/SupportAgent.ts
// Creates an agent for simple chat-based support.
// This file does not include advanced routing or state management.

import OpenAI from 'openai';
import { createAgent } from 'openai/agents';
import { MessageSquare } from 'lucide-react';

const openai = new OpenAI();

// Agent that answers basic customer questions
export const supportAgent = createAgent({
  client: openai,
  instructions: 'Provide short customer support replies.',
  model: 'gpt-4-turbo'
});

// Icon for representing support conversations
export const SupportIcon = MessageSquare;
