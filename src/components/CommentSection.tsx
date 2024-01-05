import { Button, Collapse } from 'antd';

import { useAppSelector } from '../app/hooks';
import { selectCommentsByPostId } from '../features/comments/commentsSlice';
import CommentList from './CommentList';

const CommentSection = ({ postId }: { postId: string }) => {
    const comments = useAppSelector((state) =>
        selectCommentsByPostId(state, postId)
    );
    return (
        <Collapse
            collapsible="icon"
            accordion
            ghost
            expandIcon={() => (
                <Button style={{ color: '#1677ff', fontSize: 14 }}>
                    {comments?.length + ' replies'}
                </Button>
            )}
            items={[
                {
                    children: <CommentList comments={comments} />,
                },
            ]}
        />
    );
};
export default CommentSection;
