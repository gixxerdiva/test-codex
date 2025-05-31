# backend/app/main.py
# Defines the FastAPI app with a simple health check endpoint.
# This file is not meant for heavy business logic.

from fastapi import FastAPI
from supabase import create_client, Client

app = FastAPI()

# TODO: Replace with your own Supabase credentials
SUPABASE_URL = "https://your-project.supabase.co"
SUPABASE_KEY = "public-anon-key"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.get("/api/health")
def health_check():
    """Simple endpoint to verify the service is running."""
    return {"status": "ok"}
