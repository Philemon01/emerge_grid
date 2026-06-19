import logging
from fastapi import APIRouter, Request, Response, status
from .whatsapp_service import whatsapp_dispatcher

logger = logging.getLogger("app.api.vapi")
router = APIRouter()

@router.post("/vapi-webhook")
async def handle_vapi_voice_tool(request: Request):
    """
    Exposes: https://your-hosted-domain.com
    Listens for tool invocation signals sent directly from live Vapi calls.
    """
    try:
        payload = await request.json()
        logger.info(f"📥 Received live Vapi data bundle payload: {payload}")
    except Exception:
        logger.error("❌ Aborting. Incoming request payload could not be parsed into valid JSON.")
        return Response(status_code=status.HTTP_400_BAD_REQUEST)

    # 1. Verify Vapi is calling an explicit system function tool-call sequence
    if payload.get("message", {}).get("type") == "tool-calls":
        tool_details = payload["message"]["toolCalls"]["function"]
        
        # 2. Match the specific tool name configured in your Vapi dashboard panel
        if tool_details.get("name") == "send_hospital_directions":
            
            # 🎯 AUTOMATIC CALLER LOGIC:
            # Captures the exact number of the person talking to your AI right now
            caller_phone = payload["message"]["call"]["customer"]["number"]
            logger.info(f"☎️ Live Voice call match found! Vapi requested maps text for: {caller_phone}")

            # 3. Compile your medical emergency location text
            map_text = (
                "📍 Healthcare Emergency Unit Maps:\n\n"
                "Here is your dynamic route to the emergency trauma care hub:\n"
                "https://google.com"
            )
            
            # 4. Fire the message directly to the caller via Meta API
            whatsapp_dispatcher.send_text_message(caller_phone, map_text)

            # 5. Return success token back to Vapi so the AI companion can verbally confirm it succeeded
            return {
                "result": "Success. The hospital navigation link has been successfully delivered to the patient's WhatsApp thread."
            }

    return Response(status_code=status.HTTP_200_OK)
