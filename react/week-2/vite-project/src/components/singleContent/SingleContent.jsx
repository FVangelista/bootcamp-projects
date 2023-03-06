import './index.css';

const SingleContent = ({ data }) => {
  return (
    <div className="single-content">
      <img src={data.image} alt={data.username} className="user-img" />
      <div className="text-info">
        <span>{'@' + data.user.username}</span>
        <p>{data.body}</p>
        <div className="icons">
          <img
            src="https://img.icons8.com/ios/512/filled-chat.png"
            alt="chat icon"
          />
          <img
            src="https://img.icons8.com/fluency-systems-regular/512/retweet.png"
            alt="retweet icon"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/512/hearts.png"
            alt="hearts icon"
          />
          <img
            src="https://img.icons8.com/pastel-glyph/512/upload.png"
            alt="upload icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
