import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile() {
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

    return (
        <section>
            <h1>Профиль</h1>
            <ProfileCard /> 
            <div className="feed">
                <h2>Мои публикации</h2>
                    <form className="post-form" onSubmit={addPost}></form>
                    {posts.map((post) => ( <Post key={post.id} author={post.author} title={post.title}  likes={17} text={post.text} id={post.id}/>))}
            </div>
        </section>
    )
}

export default Profile;