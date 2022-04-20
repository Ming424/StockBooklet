import React from 'react';
import { Card, CardGroup } from 'react-bootstrap/';

export default function StockPosts(props) {
  return (
    <CardGroup data-cy="stock-posts">
      {props.posts.map((post, index) => (
        <React.Fragment key={index}>
          <Card
            style={{ width: '18rem', height: '7rem' }}
            className='news-item'
            onClick={() => window.open(post.url)}
          >
            <Card.Body className='pt-1 px-2'>
              <Card.Text style={{ fontWeight: '500' }}>
                {post.summary.substring(0, 200)} (Read More)
              </Card.Text>
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}
    </CardGroup>
  );
}
