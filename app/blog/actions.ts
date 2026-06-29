"use server";

import { kv } from "@vercel/kv";

export async function incrementViews(slug: string) {
  try {
    if (!process.env.KV_REST_API_URL) return;
    await kv.incr(`post:${slug}:views`);
  } catch (e) {
    console.error("Vercel KV Error:", e);
  }
}

export async function incrementLikes(slug: string, initialLikes: number = 0) {
  try {
    if (!process.env.KV_REST_API_URL) return initialLikes + 1;
    
    // First check if it exists, if not initialize it with initialLikes + 1
    const current = await kv.get<number>(`post:${slug}:likes`);
    if (current === null && initialLikes > 0) {
      await kv.set(`post:${slug}:likes`, initialLikes + 1);
      return initialLikes + 1;
    }
    
    const newLikes = await kv.incr(`post:${slug}:likes`);
    return newLikes;
  } catch (e) {
    console.error("Vercel KV Error:", e);
    return initialLikes + 1;
  }
}

export async function incrementShares(slug: string) {
  try {
    if (!process.env.KV_REST_API_URL) return;
    await kv.incr(`post:${slug}:shares`);
  } catch (e) {
    console.error("Vercel KV Error:", e);
  }
}

export async function getPostStats(slug: string, initialViews = 0, initialLikes = 0, initialShares = 0) {
  try {
    if (!process.env.KV_REST_API_URL) {
      return { views: initialViews, likes: initialLikes, shares: initialShares };
    }

    const [views, likes, shares] = await Promise.all([
      kv.get<number>(`post:${slug}:views`),
      kv.get<number>(`post:${slug}:likes`),
      kv.get<number>(`post:${slug}:shares`)
    ]);

    // Initialize in KV if they don't exist yet
    if (views === null && initialViews > 0) await kv.set(`post:${slug}:views`, initialViews);
    if (likes === null && initialLikes > 0) await kv.set(`post:${slug}:likes`, initialLikes);
    if (shares === null && initialShares > 0) await kv.set(`post:${slug}:shares`, initialShares);

    return {
      views: views ?? initialViews,
      likes: likes ?? initialLikes,
      shares: shares ?? initialShares
    };
  } catch (e) {
    console.error("Vercel KV Error:", e);
    return {
      views: initialViews,
      likes: initialLikes,
      shares: initialShares
    };
  }
}
