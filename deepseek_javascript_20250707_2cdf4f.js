// Next.js API route example
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch data from your backend services
    const data = await fetchDataFromDB(req.query);
    res.status(200).json(data);
  }
}