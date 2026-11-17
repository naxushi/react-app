import Post from "../components/Post"
import { usePosts } from "../context/PostsContext";

function Home() {
    const {posts} = usePosts();

    return (
        <section>
            <h1>Главная</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => ( <Post key={post.id} author={post.author} title={post.title}  likes={17} text={post.text} id={post.id} />))}
            </div>
        </section>
    )
}

export default Home;