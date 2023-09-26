import React from "react";
import PropTypes from "prop-types";
import "../iframe/YoutubeEmbed.css"

const YoutubeEmbed = ({ embedId }) => (
  <div className=" video-responsive">
    <iframe
    
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
