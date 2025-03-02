export async function GET() {
  return Response.json({ 
    message: 'Hello from Nak Muay Media API!',
    status: 'success'
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Process the request body here
    
    return Response.json({ 
      message: 'Data received successfully',
      data: body,
      status: 'success'
    });
  } catch (error) {
    return Response.json({ 
      message: 'Error processing request',
      error: error.message,
      status: 'error'
    }, { status: 400 });
  }
} 