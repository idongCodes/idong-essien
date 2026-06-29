"use server";

import Redis from "ioredis";

// Global cache for the redis client to prevent recreating it on every action
let redisClient: Redis | null = null;

const getRedisClient = () => {
  if (redisClient) return redisClient;
  
  const url = process.env.REDIS_URL;
  if (!url) return null;
  
  redisClient = new Redis(url);
  return redisClient;
};

export async function incrementViews(slug: string) {
  try {
    const redis = getRedisClient();
    if (!redis) return;
    await redis.incr(`post:${slug}:views`);
  } catch (e) {
    console.error("Redis Error:", e);
  }
}

export async function incrementLikes(slug: string, initialLikes: number = 0) {
  try {
    const redis = getRedisClient();
    if (!redis) return initialLikes + 1;
    
    // First check if it exists, if not initialize it with initialLikes + 1
    const current = await redis.get(`post:${slug}:likes`);
    if (current === null && initialLikes > 0) {
      await redis.set(`post:${slug}:likes`, initialLikes + 1);
      return initialLikes + 1;
    }
    
    const newLikes = await redis.incr(`post:${slug}:likes`);
    return newLikes;
  } catch (e) {
    console.error("Redis Error:", e);
    return initialLikes + 1;
  }
}

export async function incrementShares(slug: string) {
  try {
    const redis = getRedisClient();
    if (!redis) return;
    await redis.incr(`post:${slug}:shares`);
  } catch (e) {
    console.error("Redis Error:", e);
  }
}

export async function getPostStats(slug: string, initialViews = 0, initialLikes = 0, initialShares = 0) {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return { views: initialViews, likes: initialLikes, shares: initialShares };
    }

    const [viewsStr, likesStr, sharesStr] = await Promise.all([
      redis.get(`post:${slug}:views`),
      redis.get(`post:${slug}:likes`),
      redis.get(`post:${slug}:shares`)
    ]);

    const views = viewsStr ? parseInt(viewsStr, 10) : null;
    const likes = likesStr ? parseInt(likesStr, 10) : null;
    const shares = sharesStr ? parseInt(sharesStr, 10) : null;

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
    console.error("Redis Error:", e);
    return {
      views: initialViews,
      likes: initialLikes,
      shares: initialShares
    };
  }
}
