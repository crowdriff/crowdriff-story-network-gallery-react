import React, { useEffect } from 'react';

const CrowdriffStoryGallery = (props) => {
  const { galleryId } = props;
  useEffect(() => {
    // set the script source based on environment
    const baseScriptUrl = process.env.ENV === 'production' ? 'https://g.amp.travel' : 'https://g.storygraph.ai';
    // The script to load story galleries in the current page DOM.
    const galleryLoadScript = `${baseScriptUrl}/v2/js`;
    // variable to see if the script has already been appended to the page.
    const existingScript = document.getElementById('cr__init-JS');
    // If the existingScript variable is true, do not continue to execute the useEffect, return.
    if (existingScript) {
      return;
    }
    // Gallery configurations
    const q = [];
    const a = window.amptravel = function (a, p) {
      window.amptravel.q.push({ a, p });
    };
    a.q = q;
    // Create script dom element
    const e = document.createElement('script');
    // Set the script src to the gallery load script
    e.setAttribute('src', galleryLoadScript);
    // Add an ID to the script so it can be easily selected.
    e.id = 'cr__init-JS';
    // Append script tag to document head. This will initiate the gallery load script
    document.head.appendChild(e);

    // Component unmount
    return () => {
      // If the element variable 'e' exists, remove the element from the dom.
      // This will allow the script to rerun on route changes on React sites.
      if (typeof e !== 'undefined') {
        e.remove();
      }
    };
  });
  return (
    // HTML markup for gallery
    <div
      data-amp-travel-gallery-id={galleryId}
      data-amp-travel="gallery-container"
    />
  );
};
export default CrowdriffStoryGallery;
