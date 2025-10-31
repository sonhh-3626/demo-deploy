import PostListSkeleton from "@/app/components/PostListSkeleton";
import { DEFAULT_POST_SKELETON_COUNT } from "@/constants/numberCard";

export default function Loading() {
  return (
    <>
      <PostListSkeleton numberCard={DEFAULT_POST_SKELETON_COUNT} />
    </>
  );
}
