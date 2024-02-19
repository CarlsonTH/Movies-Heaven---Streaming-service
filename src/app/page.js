import HeaderContainer from "./container/header-container";
import FooterContainer from "./container/FooterContainer";
import "./globals.css";
import CarouselContainer from "./container/CarouselContainer";


export default function Home() {
  return (
    <body className="body">
      <>
        <HeaderContainer />
        <CarouselContainer />
        <FooterContainer />
      </>
    </body>
  );
}
