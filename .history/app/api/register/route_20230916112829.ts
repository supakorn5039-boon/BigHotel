export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
}
