import { useState } from "react";
import Post from "./Post";

function ProfileCard() {

    const [posts, setPosts] = useState() [
        {
            id: 1,
            title: "Brbrbrbr",
            text: "hehehehhe",
            author: "Lily"
        },
        {
            id: 2,
            title: "URURURURUR",
            text: "AMAMAMAMAMAM",
            author: "maqs"
        },
        {
            id: 3,
            title: "meow",
            text: "dkfjdkfjghdkhgkdjhfgkdjhfgd",
            author: "sirenhead"
        }
    ];

    const [title, setTirle] = useState("");
    const [text, setTexr] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "maqss"
        }
        setPosts(...post, newPost());
        setTexr("");
        setTirle("");
    }

    return ( 
    <section className="profile-card">
        <div className="profile">
            <div className="avatar">avatar</div>
            <div className="profile-info">
                <h2>Name</h2>
                <p>@nickname</p>
            </div>
        </div>

        <form className="post-form" onSubmit={addPost}>
            <input type="text" placeholder="Заголовок" value={title} />
            <textarea placeholder="Текст поста" value={text}></textarea>
            <button type="submit">Опубликовать</button>
        </form>

        {posts.map((post) => (
            <Post key={post.id} author={post.author} title={post.title}  likes={17} text={post.text} />
        ))}
        {/* <Post author="Viktor" title="Study React for frontend"  likes={17} text="какой-то осмысленный текст" />
        <Post author="Viktor" title="Im going become a fullstack developer"  likes={17} text="какой-то осмысленный текст" /> */}

    </section>
    )
}

export default ProfileCard;