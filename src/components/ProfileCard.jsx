import { useState } from "react";
import Post from "./Post";

function ProfileCard() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "明子さん、おんがくが好きですか",
            text: "- 明子さん、おんがくが好きですか。- 大好きです。よくコンサートに行きます。ピアノをひくことが好きです。チンさんは",
            author: "Lily"
        },
        {
            id: 2,
            title: "20.09.2012",
            text: "오늘 날씨가 정말 좋습니다. 하늘이 맑고 파란색입니다. 아침에 맛있는 커피를 마셨고, 마음이 아주 편안합니다. 오후에는 가까운 공원에 가서 산책을 할 예정입니다. 모두 행복한 하루 보내세요!",
            author: "maqs"
        },
        {
            id: 3,
            title: "meow",
            text: "猫の目が緑です",
            author: "sirenhead"
        }
    ]);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "lily"
        }
        setPosts((prevPosts) => [...prevPosts, newPost]);
        setText("");
        setTitle("");
    }

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id)
        );
    }

    return ( 
    <section className="profile-card">
        <div className="profile">
            <div className="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8d7NjYM-bl-MA9ggAplpSVDziMQvD5k3qqKk8ihaOPQ&s" alt="аватарка" /></div>
            <div className="profile-info">
                <h2>Yena</h2>
                <p>@naxushi</p>
            </div>
        </div>

        <form className="post-form" onSubmit={addPost}>
            <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Текст поста" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
            <button type="submit">Опубликовать</button>
        </form>

        {posts.map((post) => (
            <Post key={post.id} author={post.author} title={post.title}  likes={17} text={post.text} id={post.id} onDelete={deletePost} />
        ))}
        {/* <Post author="Viktor" title="Study React for frontend"  likes={17} text="какой-то осмысленный текст" />
        <Post author="Viktor" title="Im going become a fullstack developer"  likes={17} text="какой-то осмысленный текст" /> */}

    </section>
    )
}

export default ProfileCard;