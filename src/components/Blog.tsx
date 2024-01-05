import { Card } from 'antd';
import type { Post } from '../features/posts/postsSlice';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectUserById } from '../features/users/usersSlice';
import CommentSection from './CommentSection';

const Blog = ({ content }: { content: Post }) => {
    const user = useAppSelector((state) =>
        selectUserById(state, content.userId)
    );
    return (
        <Card className="mt-10 dark:bg-neutral-900 dark:text-neutral-200 border-0">
            <h1 className="text-center capitalize text-2xl">{content.title}</h1>
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
            <Link to={`blog/${content.id}`}>
                <p className="text-lg mt-4">{content.body}</p>
            </Link>
            <CommentSection postId={content.id} />
        </Card>
    );
};

export default Blog;
