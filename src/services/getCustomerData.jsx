export async function getCustomerData() {
  const res = await fetch("/raw/zSFTiVWr");
  const data = await res.json();
  return data;
}
