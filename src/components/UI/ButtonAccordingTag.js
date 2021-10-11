import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomColor } from '../../helper/functions';
import { tagsSelector } from '../../redux/reselects/reader';

const ButtonAccordingTag = ({ tags }) => {

  const allTags = useSelector(tagsSelector);

  const tagIDs = tags.split(',');

  return tagIDs.map(id => {
    const backgroundColor = getRandomColor();
    return (
      <Link to="#" className="post-cata cata-sm mr-1" style={{ backgroundColor }} key={id}>{allTags?.find(tag => tag.id === Number(id)).tag}</Link>
    )
  });
}

export default ButtonAccordingTag;