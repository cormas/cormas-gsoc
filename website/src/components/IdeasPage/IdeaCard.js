import React from "react"
import * as URLS from '../../constants/urls'
import logo from '../../img/logo-big.png'

const shorten = (text, maxlength) => {
  if (text.length <= maxlength) return text;

  return text.slice(0,maxlength) + " (...)";
}

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
        <div className="projectName">{idea['title']}</div>
      </div>
      <p className="projectDescription">{shorten(idea['description'], 100)}</p>
    </a>
  )
}