import { z } from "zod";

import { CommentSchema } from "./comment-schema";

const PostSchema = z.object({
  id: z.string(),
  authorName: z.string(),
  authorSlug: z.string(),
  content: z.string().min(1).max(250),
  created_at: z.string(),
  updated_at: z.string(),
  authorId: z.string(),
  comments: z.array(CommentSchema),
  _count: z.object({
    likes: z.number(),
    comments: z.number(),
  }),
});

export const PostInputSchema = PostSchema.pick({ content: true });

export type PostType = z.infer<typeof PostSchema>;
export type PostInputType = z.infer<typeof PostInputSchema>;