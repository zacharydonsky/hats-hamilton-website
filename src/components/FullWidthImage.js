import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import logo from '../../static/img/logo.svg';
// import hero_image from '../../static/img/row-of-tiny-houses.jpeg';

// const img = getImage(hero_image) || hero_image;

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = 'bottom middle',
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: 'grid',
          alignItems: 'center',
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              // height: height,
              width: '100%',
            }}
            // You can optionally force an aspect ratio for the generated image
            // aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={['auto', 'webp', 'avif']}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={['auto', 'webp', 'avif']}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: '1/1',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid',
            }}
          >
            {/* Any content here will be centered in the component */}
            {/* An addition columns is used to restrict the size of the title card */}
            <div className="columns is-mobile">
              <div className="column"></div>
              <div
                className="box full-width-image-box column is-two-thirds"
                style={{
                  padding: '5%',
                  borderRadius: '25px',
                }}
              >
                <div className="columns level">
                  <div className="column level-item is-one-third">
                    <div className="full-width-image-logo-container">
                      <img
                        src={logo}
                        alt="HATS LOGO"
                        className=".full-width-image-logo"
                      />
                    </div>
                  </div>
                  <div className="column level-item is-two-thirds full-width-image-headings">
                    <div className="has-text-centered">
                      {title && (
                        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen full-width-image-title">
                          {title}
                        </h1>
                      )}
                      {subheading && (
                        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered full-width-image-subheading">
                          {subheading}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
