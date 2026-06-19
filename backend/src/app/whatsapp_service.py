import logging
import requests
from .config import settings

logger = logging.getLogger("app.whatsapp_service")

class WhatsAppService:
    def __init__(self):
        # 🎯 CRITICAL BUG FIX: Swapped marketing domain for Meta's active Graph API endpoint
        self.phone_number_id = settings.PHONE_NUMBER_ID
        self.access_token = settings.WHATSAPP_TOKEN
        self.graph_api_version = settings.WHATSAPP_GRAPH_API_VERSION
        
        self.base_url = f"https://graph.facebook.com/{self.graph_api_version}/{self.phone_number_id}/messages"
        self.headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }

    def send_text_message(self, recipient_phone: str, text_body: str) -> bool:
        """Sends a direct, structured text payload to a user via Meta Cloud API."""
        # Meta requires digits only without leading '+' or zero symbols (e.g. 2348031234567)
        clean_phone = recipient_phone.replace("+", "").strip()
        
        payload = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": clean_phone,
            "type": "text",
            "text": {
                "body": text_body
            }
        }
        
        logger.info(f"📤 Posting outbound message array directly to Meta API for: {clean_phone}")
        
        try:
            response = requests.post(self.base_url, json=payload, headers=self.headers, timeout=10)
            response.raise_for_status()
            logger.info(f"✅ Message delivered via Meta Cloud API. Response metadata: {response.json()}")
            return True
        except requests.exceptions.RequestException as e:
            error_data = e.response.json() if e.response else str(e)
            logger.error(f"❌ Failed to push outbound traffic to Meta WhatsApp gateway: {error_data}")
            return False

# Initialize a global service module instance
whatsapp_dispatcher = WhatsAppService()
