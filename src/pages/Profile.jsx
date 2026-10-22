import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile() {
    const [posts, setPosts] = useState(() => {
        const savedPost = localStorage.getItem("posts");
        if (savedPost) {
            return JSON.parse(savedPost);
        }
        return []; 
    });

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();
        if (!title.trim() || !text.trim()) return;

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "lily"
        };
        
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts)); 

        setText("");
        setTitle("");
    }

    function deletePost(id) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

    function deleteAllPost() {
        setPosts([]);
        localStorage.setItem("posts", JSON.stringify([]));
    }

    return (
        <section>
            <h1>Профиль</h1>
            <ProfileCard /> 

            <div className="feed">
                {/* ВОТ ФОРМА ДЛЯ ДОБАВЛЕНИЯ */}
                <form className="post-form" onSubmit={addPost}>
                    <input 
                        type="text" 
                        placeholder="Заголовок" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Текст поста" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <button type="submit">Опубликовать</button>
                </form>

                <h2>Мои публикации</h2>
                <p>Всего публикаций: {posts.length}</p>

                {posts.length > 0 && (
                    <button type="button" className="delete-button" onClick={deleteAllPost}>
                        Удалить все
                    </button>
                )}
                {posts.map((post) => ( 
                    <Post 
                        key={post.id} 
                        author={post.author} 
                        title={post.title} 
                        text={post.text} 
                        id={post.id} 
                        onDelete={deletePost} 
                    />
                ))}
            </div>
        </section>
    )
}

export default Profile;