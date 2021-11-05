import { FC } from "react";
import Post from "../models/postModel";

// interface PostProps {
//     post: Post
// }

const PostCard: FC<Post> = (props) => {

    const { id, title, body } = props;

    return (
        <div className="card">
            <img src="https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg" width="100%" alt="" />
             <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default PostCard
