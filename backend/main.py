

import logging
import uvicorn
from fastapi import FastAPI
from src.app.vapi_route import handle_vapi_voice_tool as vapi_router

# Configure production console terminal log views
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("app.main")

app = FastAPI(title="Modular Healthcare Voice-to-Text Broker")

# Include the modular endpoint router under the clean api prefix paths
app.include_router(vapi_router, prefix="/api")

@app.on_event("startup")
def startup_event():
    logger.info("🚀 Production Voice-to-WhatsApp Server module successfully running.")

if __name__ == "__main__":
    import uvicorn
    import os

    # Get the port from Render's environment, or default to 8001 for local development
    port = int(os.environ.get("PORT", 8001))
    
    # Turn off reload in production (Render), keep it on for local development
    is_production = os.environ.get("RENDER") is not None
    reload_setting = False if is_production else True

uvicorn.run("main:app", host="0.0.0.0", port=port, reload=reload_setting)

