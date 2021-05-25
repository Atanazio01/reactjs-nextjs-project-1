import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
      // post={post} também funciona, para o caso de muitos atbts
    ))}
  </div>
);

/* Posts.defaultProps = {
  posts: [],
}; */

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
