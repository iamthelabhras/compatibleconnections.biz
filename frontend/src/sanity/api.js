import {useSanityClient} from 'astro-sanity';

export async function getAllTips() {
  const client = useSanityClient();
  const query = `*[_type == "dating_tip"]`;
  const tips = await client.fetch(query);
  return tips;
}