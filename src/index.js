import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import AprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <AprovalCard >
        <CommentDetail
          author='Aurora'
          timeAgo='Today at 3:00p.m' content='Nice Post'
          img={faker.image.avatar()} />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author='Tim'
          timeAgo='Today at 8:00p.m' content='Great article'
          img={faker.image.avatar()} />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author='Dave'
          timeAgo='Today at 4:00p.m' content='Amazing'
          img={faker.image.avatar()} />
      </AprovalCard>
    </div>

  )
};
ReactDOM.render(<App />, document.getElementById('root')
);


