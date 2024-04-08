export async function getCustomerData() {
  const res = await fetch("/api/raw/zSFTiVWr");
  const data = await res.json();
  return data;
}
