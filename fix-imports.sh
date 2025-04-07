#!/bin/bash

# Update imports in blog/[slug]/page.tsx
sed -i '' 's|@/lib/blog|../../../lib/blog|g' app/blog/[slug]/page.tsx

# Update imports in blog/page.tsx
sed -i '' 's|@/lib/blog|../../lib/blog|g' app/blog/page.tsx

# Update imports in layout.tsx
sed -i '' 's|@/components/Navigation|./components/Navigation|g' app/layout.tsx

# Update imports in page.tsx
sed -i '' 's|@/lib/blog|../lib/blog|g' app/page.tsx 