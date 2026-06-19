import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / ".env")

class Settings:
    # 📱 Syncing your exact requested environment keys
    PHONE_NUMBER_ID: str = os.getenv("PHONE_NUMBER_ID", "")
    WHATSAPP_TOKEN: str = os.getenv("WHATSAPP_TOKEN", "")
    WHATSAPP_GRAPH_API_VERSION: str = os.getenv("WHATSAPP_GRAPH_API_VERSION", "v20.0")

settings = Settings()
