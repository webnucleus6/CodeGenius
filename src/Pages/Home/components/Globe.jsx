import { useEffect, useState } from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 30,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "nodedotjs",
  "express",
  "nextdotjs",
  "daisyui",
  "firebase",
  "vercel",
  "mongodb",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "adobephotoshop",
  "adobeillustrator",
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  const cloudOptions = {
    wheelZoom: false, // Disable zooming in/out with the mouse wheel
    reverse: true,
    depth: 1,
    imageScale: 2,
    activeCursor: "default",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  };

  return (
    <Cloud options={cloudOptions}>
      {icons}
    </Cloud>
  );
};

export default DynamicIconCloud;
