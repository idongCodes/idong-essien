import ProjectCard, { Project } from "./ProjectCard";

const fallbackProjects: Project[] = [
  {
    title: "My Daily Devotional",
    description: "A spiritually enriching app combining Scripture with modern tech for personalized insights. Features daily readings, contextual understanding, and tools for prayer and worship, powered by AI integration.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageDesktop: "/devotional-desktop.png",
    imageMobile: "/devotional-mobile.png",
    liveUrl: "https://idongcodes.github.io/my-daily-devotional/",
    githubUrl: "https://github.com/idongCodes/my-daily-devotional"
  },
  {
    title: "Symbria Logistics",
    description: "A comprehensive delivery and logistics management dashboard. Streamlines route tracking, inventory management, and driver coordination with a clean, data-rich interface. Built to handle complex scheduling needs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageDesktop: "/symbria-desktop.png",
    imageMobile: "/symbria-mobile.jpg",
    liveUrl: "https://symbria-delivery-logistics.vercel.app/",
    githubUrl: "https://github.com/idongCodes/symbria-delivery-logistics"
  },
  {
    title: "HSC Productions",
    description: "A high-energy, mobile-first portfolio for a music producer. Features a custom beat store, dynamic media gallery, and a 'Street Cred' testimonial section with a bold visual aesthetic. Optimized for high performance and visual impact.",
    tech: ["React", "Next.js", "Framer Motion"],
    imageDesktop: "/hsc-desktop.png",
    imageMobile: "/hsc-mobile.jpg",
    liveUrl: "https://hscprod.vercel.app/",
    githubUrl: "https://github.com/idongCodes/hscprod"
  },
  {
    title: "LoveMyFam",
    description: "A private, secure social platform designed for families. Features include a 'Common Room' for updates, threaded comments, emoji reactions, and a searchable family directory. It prioritizes privacy by ensuring no public access to sensitive family moments.",
    tech: ["Next.js 15", "Prisma", "PostgreSQL"],
    imageDesktop: "/love-my-fam-desktop.png",
    imageMobile: "/love-my-fam-mobile.jpg",
    liveUrl: "https://love-my-fam.vercel.app/",
    githubUrl: "https://github.com/idongCodes/love-my-fam"
  }
];



const techMap: Record<string, string> = {
  "next": "Next.js",
  "react": "React",
  "tailwindcss": "Tailwind CSS",
  "prisma": "Prisma",
  "@prisma/client": "Prisma",
  "framer-motion": "Framer Motion",
  "@supabase/supabase-js": "Supabase",
  "pg": "PostgreSQL",
  "mongodb": "MongoDB",
  "mongoose": "Mongoose",
  "@google/generative-ai": "Gemini API",
  "resend": "Resend",
  "pusher": "Pusher",
  "typescript": "TypeScript",
  "zod": "Zod",
  "twilio": "Twilio",
  "lucide-react": "Lucide"
};

async function getRepoTechStack(repo: string, fallbackLangData: any): Promise<string[]> {
  try {
    let pkgRes = await fetch(`https://raw.githubusercontent.com/idongCodes/${repo}/main/package.json`, { next: { revalidate: 3600 } });
    if (!pkgRes.ok) {
      pkgRes = await fetch(`https://raw.githubusercontent.com/idongCodes/${repo}/master/package.json`, { next: { revalidate: 3600 } });
    }
    
    if (pkgRes.ok) {
      const pkg = await pkgRes.json();
      const deps = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})];
      const matchedTech = deps
        .map(dep => techMap[dep])
        .filter((t): t is string => !!t);
      
      const uniqueTech = Array.from(new Set(matchedTech));
      if (uniqueTech.length > 0) {
        return uniqueTech.slice(0, 4);
      }
    }
  } catch (e) {
    // Ignore error and fallback
  }
  
  return Object.keys(fallbackLangData).slice(0, 4);
}

async function getPinnedProjects(): Promise<Project[]> {
  try {
    const profileRes = await fetch("https://github.com/idongCodes", {
      next: { revalidate: 3600 }
    });
    
    if (!profileRes.ok) {
      throw new Error("Failed to fetch GitHub profile");
    }

    const html = await profileRes.text();
    const repoMatches = [...html.matchAll(/<span class="repo">([^<]+)<\/span>/g)];
    const repoNames = repoMatches.map(m => m[1]).slice(0, 6);

    if (repoNames.length === 0) {
      return fallbackProjects;
    }

    const projects = await Promise.all(
      repoNames.map(async (repo) => {
        try {
          const [repoRes, langRes] = await Promise.all([
            fetch(`https://api.github.com/repos/idongCodes/${repo}`, {
              next: { revalidate: 3600 },
              headers: { "Accept": "application/vnd.github.v3+json" }
            }),
            fetch(`https://api.github.com/repos/idongCodes/${repo}/languages`, {
              next: { revalidate: 3600 },
              headers: { "Accept": "application/vnd.github.v3+json" }
            })
          ]);

          if (!repoRes.ok) return null;

          const repoData = await repoRes.json();
          const langData = langRes.ok ? await langRes.json() : {};

          const tech = await getRepoTechStack(repo, langData);
          const liveUrl = repoData.homepage || repoData.html_url;
          
          let imageMobile = `https://avatars.githubusercontent.com/u/22062405?v=4`;
          let imageDesktop = `https://opengraph.githubassets.com/1/idongCodes/${repo}`;
          
          if (repoData.homepage) {
            const encodedUrl = encodeURIComponent(repoData.homepage);
            imageMobile = `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=375&viewport.height=812&viewport.isMobile=true`;
            imageDesktop = `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url`;
          }

          return {
            title: repoData.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
            description: repoData.description || "No description provided for this repository.",
            tech: tech.length > 0 ? tech : ["GitHub Repository"],
            imageDesktop: imageDesktop,
            imageMobile: imageMobile,
            liveUrl: liveUrl,
            githubUrl: repoData.html_url,
          };
        } catch (e) {
          console.error(`Failed to fetch metadata for ${repo}`, e);
          return null;
        }
      })
    );

    const validProjects = projects.filter((p): p is Project => p !== null);
    
    // If rate limited or all failed, return fallback
    if (validProjects.length === 0) {
      return fallbackProjects;
    }

    return validProjects;
  } catch (error) {
    console.error("Error fetching pinned projects:", error);
    return fallbackProjects;
  }
}

export default async function ProjectsSection() {
  const projects = await getPinnedProjects();

  return (
    <section id="projects" className="py-20 w-full px-4 md:px-8 bg-black border-t border-white/5">
      <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">
        Featured <span className="text-sky-blue">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
