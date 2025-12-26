import os

# --- Configuration ---
OUTPUT_FILE = "project_bundle.txt"

# Folders to completely ignore
IGNORE_DIRS = {
    "node_modules", 
    ".next", 
    ".git", 
    ".vscode", 
    "out", 
    "build", 
    "public", # Often contains images, but keep if you have logic there
    "dist"
}

# File extensions to ignore (images, locks, binaries)
IGNORE_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg", ".webp", # Images
    ".mp4", ".mov", ".mp3", # Media
    ".eot", ".ttf", ".woff", ".woff2", # Fonts
    ".pyc", # Python bytecode
    ".lock", "-lock.json", # Lock files (often too large/noisy)
    ".DS_Store" # Mac junk
}

# Specific filenames to ignore
IGNORE_FILES = {
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "bundle.py", # Don't bundle the bundler itself
    OUTPUT_FILE # Don't bundle the output file
}

def is_text_file(filename):
    """Check if a file is likely a text file based on extension."""
    ext = os.path.splitext(filename)[1].lower()
    return ext not in IGNORE_EXTENSIONS

def bundle_project():
    root_dir = os.getcwd()
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as outfile:
        print(f"📦 Bundling project from: {root_dir}")
        print(f"🚫 Ignoring directories: {', '.join(IGNORE_DIRS)}")
        
        file_count = 0
        
        for dirpath, dirnames, filenames in os.walk(root_dir):
            # Modify dirnames in-place to skip ignored directories
            dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]
            
            for filename in filenames:
                if filename in IGNORE_FILES:
                    continue
                
                if not is_text_file(filename):
                    continue
                
                filepath = os.path.join(dirpath, filename)
                relative_path = os.path.relpath(filepath, root_dir)
                
                try:
                    with open(filepath, "r", encoding="utf-8") as infile:
                        content = infile.read()
                        
                        # Write File Header
                        outfile.write(f"\n{'='*80}\n")
                        outfile.write(f"FILE: {relative_path}\n")
                        outfile.write(f"{'='*80}\n\n")
                        
                        # Write Content
                        outfile.write(content)
                        outfile.write("\n")
                        
                        file_count += 1
                        print(f"  + Added: {relative_path}")
                        
                except Exception as e:
                    print(f"  ! Error reading {relative_path}: {e}")

    print(f"\n✅ Bundling complete! {file_count} files written to '{OUTPUT_FILE}'.")

if __name__ == "__main__":
    bundle_project()