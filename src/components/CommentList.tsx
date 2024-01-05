import { Avatar, List, Button } from 'antd';
import { Comment } from '../features/comments/commentsSlice';

const CommentList = ({ comments }: { comments: Comment[] }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg`}
                            />
                        }
                        title={
                            <div className=" text-black dark:text-neutral-200">
                                {item.email}
                            </div>
                            // <>
                            //     {item.email}{' '}
                            //     {/* <span className="opacity-50">
                            //         {randomDay(postDate)}
                            //     </span> */}
                            // </>
                        }
                        description={
                            <div className="flex flex-col dark:text-neutral-200">
                                {item.body}
                                <Button
                                    className="flex justify-start"
                                    type="link"
                                >
                                    Reply to
                                </Button>
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    );
};

export default CommentList;
