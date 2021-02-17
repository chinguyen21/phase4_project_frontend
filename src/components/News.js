
import React, {useEffect} from 'react';
import {Container, Typography} from "@material-ui/core"

const News = ({news}) => {

  return (
    <React.Fragment>
      <Container  maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh' }}>
        {news.title}
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default News;