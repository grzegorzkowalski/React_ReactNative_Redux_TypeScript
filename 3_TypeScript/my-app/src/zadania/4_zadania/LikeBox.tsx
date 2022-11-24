const LikeBox = ({likes} : {likes: number}) => {
    return (
        <div>
            <h2>{likes} Likes</h2>
            <button>Polub</button>
        </div>
    );
};

export default LikeBox;
