import { z } from "zod";

export const CommentSchema = z.object({
  id: z.string(),
  authorName: z.string(),
  authorSlug: z.string(),
  content: z.string(),
  like: z.string(),
  userId: z.string(),
  postId: z.string(),
});

export const CommentInputSchema = CommentSchema.pick({
  content: true,
  postId: true,
});
