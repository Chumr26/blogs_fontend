import { Card } from 'antd';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import { useAppSelector } from '../app/hooks';
import { selectUserById } from '../features/users/usersSlice';
import { selectPostById } from '../features/posts/postsSlice';

const BlogPage = () => {
    const { id } = useParams();

    const post = useAppSelector((state) => selectPostById(state, id!));
    const user = useAppSelector((state) => selectUserById(state, post.userId));

    return (
        <Card className="mt-10 dark:bg-neutral-900 dark:text-neutral-200 border-0">
            <h1 className="text-center capitalize text-2xl">{post.title}</h1>
            <p className="font-bold">
                Author:
                <span className="font-normal text-base"> {user.name}</span>
            </p>
            <p className="font-bold">
                Create at:
                <span className="font-normal text-base">
                    {' '}
                    {/* {dateFormated} */}
                </span>
            </p>
            <Link to={`blog/${post.id}`}>
                <p className="text-lg mt-4">{post.body}</p>
            </Link>
            <CommentSection postId={post.id} />
        </Card>
    );
};

export default BlogPage;
