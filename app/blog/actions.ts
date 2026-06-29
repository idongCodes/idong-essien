"use server";

import { Redis } from "@upstash/redis";

const getRedisClient = () => {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  
  if (!url || !token) return null;
  
  return new Redis({
    url,
    token,
  });
};

export async function incrementViews(slug: string) {
  try {
    const redis = getRedisClient();
    if (!redis) return;
    await redis.incr(`post:${slug}:views`);
  } catch (e) {
    console.error("Upstash Redis Error:", e);
  }
}

export async function incrementLikes(slug: string, initialLikes: number = 0) {
  try {
    const redis = getRedisClient();
    if (!redis) return initialLikes + 1;
    
    // First check if it exists, if not initialize it with initialLikes + 1
    const current = await redis.get<number>(`post:${slug}:likes`);
    if (current === null && initialLikes > 0) {
      await redis.set(`post:${slug}:likes`, initialLikes + 1);
      return initialLikes + 1;
    }
    
    const newLikes = await redis.incr(`post:${slug}:likes`);
    return newLikes;
  } catch (e) {
    console.error("Upstash Redis Error:", e);
    return initialLikes + 1;
  }
}

export async function incrementShares(slug: string) {
  try {
    const redis = getRedisClient();
    if (!redis) return;
    await redis.incr(`post:${slug}:shares`);
  } catch (e) {
    console.error("Upstash Redis Error:", e);
  }
}

export async function getPostStats(slug: string, initialViews = 0, initialLikes = 0, initialShares = 0) {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return { views: initialViews, likes: initialLikes, shares: initialShares };
    }

    const [views, likes, shares] = await Promise.all([
      redis.get<number>(`post:${slug}:views`),
      redis.get<number>(`post:${slug}:likes`),
      redis.get<number>(`post:${slug}:shares`)
    ]);

    // Initialize in KV if they don't exist yet
    if (views === null && initialViews > 0) await redis.set(`post:${slug}:views`, initialViews);
    if (likes === null && initialLikes > 0) await redis.set(`post:${slug}:likes`, initialLikes);
    if (shares === null && initialShares > 0) await redis.set(`post:${slug}:shares`, initialShares);

    return {
      views: views ?? initialViews,
      likes: likes ?? initialLikes,
      shares: shares ?? initialShares
    };
  } catch (e) {
    console.error("Upstash Redis Error:", e);
    return {
      views: initialViews,
      likes: initialLikes,
      shares: initialShares
    };
  }
}
