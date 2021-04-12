import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 1680 });
  return isDesktop ? children : null;
};
const Labtop = ({ children }) => {
  const isLabtop = useMediaQuery({ maxWidth: 1366 });
  return isLabtop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 1024 });
  return isNotMobile ? children : null;
};
export { Desktop, Labtop, Tablet, Mobile, Default };
