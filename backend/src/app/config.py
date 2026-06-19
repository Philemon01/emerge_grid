import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    # 📱 Syncing your exact requested environment keys
    PHONE_NUMBER_ID: str = os.getenv("PHONE_NUMBER_ID", "")
    WHATSAPP_TOKEN: str = os.getenv("WHATSAPP_TOKEN", "")

settings = Settings()
