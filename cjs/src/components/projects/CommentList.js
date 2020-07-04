import React from 'react'
import CommentSummary from './CommentSummary'


const CommentList = ({comments}) => {
 var parts = window.location.pathname.split('/');
 var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
 var count = 0;
 
 

  return (
    <div className="comment-list section">

      { comments && comments.map(comment => {
        count++;
       
        var match=comment.projectId;
        if(lastSegment == match){
        return (
            <div className="amni">
       
           <CommentSummary comment={comment} />
            </div>  
        )
        }
            
      })
      }
      
    </div>
  )
}

export default CommentList