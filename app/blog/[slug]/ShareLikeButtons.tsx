"use client";

import { useState } from "react";
import { FaThumbsUp, FaShareAlt, FaCheck } from "react-icons/fa"; 
import { incrementLikes, incrementShares } from "./../actions";

interface Props {
  postId: string;
  title: string;
  headline: string;
  initialLikes: number;
}

export default function ShareLikeButtons({ postId, title, headline, initialLikes }: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) return;
    setLiked(true);
    setLikes(prev => prev + 1);
    
    // Server action
    const newLikes = await incrementLikes(postId, initialLikes);
    if (newLikes !== null && newLikes !== undefined) {
      setLikes(newLikes);
    }
  };

  const handleShare = async () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/blog/${postId}`;
    
    const shareData = {
      title,
      text: headline,
      url: shareUrl,
    };

    // Server action for tracking share clicks
    await incrementShares(postId);

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) { console.log("Error sharing", err); }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      } catch (err) { alert("Could not copy link."); }
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button 
        onClick={handleLike}
        disabled={liked}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border border-sky-blue/30 ${
          liked 
          ? "bg-sky-blue/20 text-sky-blue cursor-default" 
          : "text-sky-blue hover:bg-sky-blue/10 active:scale-95"
        }`}
      >
        <FaThumbsUp /> {liked ? 'Liked' : 'Like'} ({likes.toLocaleString()})
      </button>

      <button 
        onClick={handleShare}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(135,206,235,0.3)] ${
          copied ? "bg-green-500 text-white" : "bg-sky-blue text-black hover:bg-sky-400 active:scale-95"
        }`}
      >
        {copied ? <FaCheck /> : <FaShareAlt />}
        {copied ? "Link Copied!" : "Share Article"}
      </button>
    </div>
  );
}
