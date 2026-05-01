const express = require("express");
const app = express();
const PORT = 3000;

// Dummy blog data
const posts = [
  {
    handle: "post-1",
    title: "Breaking News 1",
    shortDescription: "This is a short description for post 1.",
    image: "https://picsum.photos/seed/p1/600/400",
    body: "Full content of blog post 1. Lorem ipsum dolor sit amet..."
  },
  {
    handle: "post-2",
    title: "Tech Update",
    shortDescription: "Latest tech updates you should know.",
    image: "https://picsum.photos/seed/p2/600/400",
    body: "Detailed article about tech updates..."
  },
  {
    handle: "post-3",
    title: "Market Trends",
    shortDescription: "Stock market trends overview.",
    image: "https://picsum.photos/seed/p3/600/400",
    body: "Full article about market trends..."
  },
  {
    handle: "post-4",
    title: "Sports Highlights",
    shortDescription: "Top sports moments of the week.",
    image: "https://picsum.photos/seed/p4/600/400",
    body: "Detailed sports highlights..."
  },
  {
    handle: "post-5",
    title: "Health Tips",
    shortDescription: "Daily health tips for better living.",
    image: "https://picsum.photos/seed/p5/600/400",
    body: "Full health tips article..."
  },
  {
    handle: "post-6",
    title: "Travel Guide",
    shortDescription: "Top travel destinations.",
    image: "https://picsum.photos/seed/p6/600/400",
    body: "Detailed travel guide..."
  },
  {
    handle: "post-7",
    title: "Food Trends",
    shortDescription: "What's trending in food.",
    image: "https://picsum.photos/seed/p7/600/400",
    body: "Food trends article..."
  },
  {
    handle: "post-8",
    title: "Startup News",
    shortDescription: "Latest startup ecosystem news.",
    image: "https://picsum.photos/seed/p8/600/400",
    body: "Full startup news..."
  },
  {
    handle: "post-9",
    title: "AI Innovations",
    shortDescription: "New advancements in AI.",
    image: "https://picsum.photos/seed/p9/600/400",
    body: "Detailed AI innovations article..."
  },
  {
    handle: "post-10",
    title: "Entertainment Buzz",
    shortDescription: "Trending entertainment stories.",
    image: "https://picsum.photos/seed/p10/600/400",
    body: "Full entertainment article..."
  }
];

// GET /api/posts → list of posts (summary)
app.get("/api/posts", (req, res) => {
  const summary = posts.map(p => ({
    handle: p.handle,
    title: p.title,
    shortDescription: p.shortDescription,
    image: p.image
  }));

  res.json(summary);
});

// GET /api/post/:postHandle → single post
app.get("/api/post/:postHandle", (req, res) => {
  const { postHandle } = req.params;

  const post = posts.find(p => p.handle === postHandle);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json({
    title: post.title,
    image: post.image,
    body: post.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});