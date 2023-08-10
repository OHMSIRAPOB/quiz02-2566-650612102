"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner 
          name="Sirapob Lueangprasert " 
          id = "650612102"
          title="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" 
          OwnerLike="100 คน"
        />

        {/* Comment and Reply Example */}
        {comments.map((props) => (
          <Comment
            userImagePath={props.userImagePath}
            username={props.username}
            commentText={props.commentText}
            likeNum={props.likeNum}
            replies={props.replies}
            key={props.username}
          />
        ))}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}

