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

async function getFavicon(url: string): Promise<string> {
  if (!url) return `https://avatars.githubusercontent.com/u/22062405?v=4`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed");
    const html = await res.text();
    const match = html.match(/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["']/i) || 
                  html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["'](?:shortcut )?icon["']/i);
    if (match) {
      return new URL(match[1], url).href;
    }
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=256`;
  } catch {
    return `https://avatars.githubusercontent.com/u/22062405?v=4`; // fallback to github avatar
  }
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

          const tech = Object.keys(langData).slice(0, 4);
          const liveUrl = repoData.homepage || repoData.html_url;
          
          let favicon = `https://avatars.githubusercontent.com/u/22062405?v=4`;
          if (repoData.homepage) {
            favicon = await getFavicon(repoData.homepage);
          }

          return {
            title: repoData.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
            description: repoData.description || "No description provided for this repository.",
            tech: tech.length > 0 ? tech : ["GitHub Repository"],
            imageDesktop: `https://opengraph.githubassets.com/1/idongCodes/${repo}`,
            imageMobile: favicon,
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
