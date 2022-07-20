import { Image } from "react-bootstrap";

const SocialIcons = ({ iconNames }) => {
  return (
    <div className="d-flex flex-row justify-content-center">
      {iconNames.map((iconName) => (
        <span key={iconName} className="mx-2">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/images/socials/${iconName}.png`}
            width="20px"
            role="button"
          />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
