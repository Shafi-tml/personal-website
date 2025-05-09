const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DRAFTS_DIR = path.join(process.cwd(), 'content', 'drafts');
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Ensure directories exist
if (!fs.existsSync(DRAFTS_DIR)) {
  fs.mkdirSync(DRAFTS_DIR, { recursive: true });
}
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Process all markdown files in the drafts directory
function processDrafts() {
  const files = fs.readdirSync(DRAFTS_DIR);
  const markdownFiles = files.filter(file => 
    file.endsWith('.md') || file.endsWith('.mdx')
  ).filter(file => file !== 'template.md');

  markdownFiles.forEach(processFile);
}

function processFile(filename) {
  const filePath = path.join(DRAFTS_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Parse the content
  const { data, content: bodyContent } = matter(content);
  
  // If no frontmatter exists, create it from the content
  if (!data.title) {
    // Try to find the first heading
    const titleMatch = bodyContent.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      data.title = titleMatch[1];
    } else {
      data.title = path.basename(filename, path.extname(filename))
        .replace(/-/g, ' ')
        .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix if exists
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }

  // Set the date if not provided
  if (!data.date) {
    data.date = new Date().toISOString().split('T')[0];
  }

  // Generate excerpt if not provided
  if (!data.excerpt) {
    const firstParagraph = bodyContent
      .split('\n\n')[0]
      .replace(/^#\s+.+\n/, '') // Remove title if it exists
      .trim();
    data.excerpt = firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? '...' : '');
  }

  // Create the new blog post content
  const newContent = matter.stringify(bodyContent, data);

  // Generate the new filename
  const date = new Date(data.date);
  const datePrefix = date.toISOString().split('T')[0];
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const newFilename = `${datePrefix}-${slug}.mdx`;
  const newPath = path.join(BLOG_DIR, newFilename);

  // Write the new file
  fs.writeFileSync(newPath, newContent);
  
  // Remove the original file
  fs.unlinkSync(filePath);

  console.log(`✅ Processed "${filename}" -> "${newFilename}"`);
}

// Run the processor
processDrafts(); 