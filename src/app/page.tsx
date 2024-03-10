import TeaAbout from "./TeaAbout/page";
import TeaArticle from "./TeaArticle/page";
import TeaContact from "./TeaContact/page";
import TeaProducts from "./TeaProducts/page";
import TeaWelcome from "./TeaWelcome/page";
import TeaPromotional from "./TeaPromotional/page";
import Teastimonial from "./Teastimonial/page";
import TeaStore from "./TeaStore/page";

export default function Home() {
  return (
    <main>
      <TeaWelcome/>
      <TeaAbout/>
      <TeaProducts/>
      <TeaArticle/>
      <TeaPromotional/>
      <TeaStore/>
      <Teastimonial/>
      <TeaContact/>
    </main>)
}