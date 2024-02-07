import React from 'react';
import Typography from '@mui/material/Typography';

import * as URLS from '../../constants/urls';
import logo from '../../img/logo-big.png';


export default function IdeaCard({idea}) {

  return (
    <a href={idea['id']} id={idea['title'].replace(/\W/g, '_')} className="ideaCard">
      <div className="header">
        <div className="projectLogo">
          <img
            src={idea['img'] ? URLS.IMAGE_FOLDER + '/' + idea['img'] : logo}
            alt={idea['title']}
            className="projectLogo"
          />
        </div>
        <Typography variant="h6">{idea['title']}</Typography>
      </div>
      <Typography variant="body1" className="projectDescription" gutterBottom>
        <b>Keywords:</b> {idea?.keywords.join(', ')}
      </Typography>
    </a>
  )
}