import contentList from '../../mocks/contentList';
import SingleContent from '../singleContent/SingleContent';
import './index.css';

const Content = () => {
  return (
    <div className="Content">
      {contentList.map((content) => (
        <SingleContent data={content} />
      ))}
      <a className="btn">
        <img
          src="https://img.icons8.com/nolan/512/twitter-circled.png"
          alt="post twitter"
        />
      </a>
    </div>
  );
};

export default Content;
