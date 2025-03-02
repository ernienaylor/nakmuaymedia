export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json({ 
        message: 'All fields are required',
        status: 'error'
      }, { status: 400 });
    }
    
    // In a real application, you would:
    // 1. Validate the email format
    // 2. Sanitize the inputs
    // 3. Send an email notification
    // 4. Store the contact request in a database
    
    // For now, we'll just log the contact request
    console.log('Contact form submission:', { name, email, subject, message });
    
    return Response.json({ 
      message: 'Your message has been sent successfully',
      status: 'success'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    return Response.json({ 
      message: 'Error processing your request',
      error: error.message,
      status: 'error'
    }, { status: 500 });
  }
} 