import React from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';

function Posts() {
    const {data: posts} = postApi.useFetchAllPostsQuery(5);
    return (
        <div>
            {posts && posts.map((item) => 
                <PostItem  post={item} key={item.id}/>
            )}
        </div>
    );
}

export default Posts;