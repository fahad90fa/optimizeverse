
/**
 * Utility function to redirect users to WhatsApp with a pre-filled message
 * @param phoneNumber - The WhatsApp number to contact (include country code without +)
 * @param serviceName - The name of the service/subscription the user is interested in
 * @param userName - The user's name (optional)
 * @returns void - Opens WhatsApp in a new tab
 */
export const redirectToWhatsApp = (
  phoneNumber: string, 
  serviceName: string,
  userName?: string
): void => {
  // Base message template
  const message = `Hi! I'm ${userName || 'interested'} in the ${serviceName} subscription from OptimizeVerse. Please provide more details.`;
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open in a new tab
  window.open(whatsappUrl, '_blank');
};

// Default WhatsApp number for the application
export const DEFAULT_WHATSAPP_NUMBER = '923320407479';
