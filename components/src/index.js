import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovelCard from './ApprovalCard';


const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovelCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovelCard>
            <ApprovelCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo="Today at 4:45PM" 
                    commentText="Nice blog post" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovelCard>
            <ApprovelCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={"Today at 2:00AM"} 
                    commentText="I like the subject" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovelCard>
            <ApprovelCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText="I like the writing" 
                    avatarImg={faker.image.avatar()}
                />
            </ApprovelCard>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);