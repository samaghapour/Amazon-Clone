import { useSelector } from 'react-redux';
import CommentBox from './CommentBox';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const CustomerComments = () => {
  const location = useSelector((state) => state.DeliveryLocation);
  return (
    <div id='CustomerComments'>
      <h2 className='details-black-title'>
        Top reviews from the {location && location}
      </h2>

      <div id='CustomerCommentsContainer'>
        <CommentBox
          starNumber={4}
          name='Sam Aghapour'
          title='it works very well, it took me few hours to handle it'
          date='October 5, 2021'
          comment='this is a dummy comment for amazon clone comment box written by sam aghapour.
          this is a dummy comment for amazon clone comment box written by sam aghapour. this is a dummy comment for amazon clone comment box written by sam aghapour. this is a dummy comment for amazon clone comment box written by sam aghapour. this is a dummy comment for amazon clone comment box written by sam aghapour.
          this is a dummy comment for amazon clone comment box written by sam aghapour. '
          location={location}
          helpful={19}
        />
        <CommentBox
          starNumber={4}
          name='tony'
          title='cool'
          date='October 7, 2021'
          comment='this is a dummy comment for amazon clone comment box written by sam aghapour. '
          location={location}
        />
        <CommentBox
          starNumber={5}
          name='Brian'
          title="it's broken 120 days later..."
          date='October 9, 2021'
          comment='this is a dummy comment for amazon clone comment box written by sam aghapour. '
          location={location}
        />
        <CommentBox
          starNumber={3}
          name='natasha'
          title='not bad , i need to spend more time with it to see how is it '
          date='october 14, 2021'
          comment='not bad , i need to spend more time with it to see how is it
           '
          location={location}
          helpful={4}
        />
        <CommentBox
          name='john'
          title='Awful'
          date='october 19, 2021'
          comment="this is awful , i don't  recommend it"
          location={location}
          helpful={2}
        />
        <CommentBox
          starNumber={1}
          name='sara'
          title="i don't know what to say"
          date='october 26, 2021'
          comment="'this is a dummy comment for amazon clone comment box written by sam aghapour. this is a dummy comment for amazon clone comment box written by sam aghapour. "
          location={location}
        />
        <CommentBox
          starNumber={1}
          name='tom'
          title="i can't open it's box"
          date='october 29, 2021'
          comment="heyyy, i can't open it's box what the hell???. "
          location={location}
        />
      </div>
      <span className='details-a more-comment-link'>
        See all reviews <KeyboardArrowRightIcon fontSize='small' />{' '}
      </span>
    </div>
  );
};

export default CustomerComments;
