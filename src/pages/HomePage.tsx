import { useAppSelector } from '../app/hooks';
import Blog from '../components/Blog';
import { selectAllPost } from '../features/posts/postsSlice';

const HomePage = () => {
    const posts = useAppSelector(selectAllPost);
    return (
        <div>
            {posts.map((post) => (
                <Blog key={post?.id} content={post} />
            ))}
        </div>
    );
};
export default HomePage;
