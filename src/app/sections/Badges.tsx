import LogoLoop from "../components/loop";
import Title from "../components/title";
import { useLanguage } from "../context/languageContext";
import { getCertificates } from "../utils/getCertificates";

export default function Badges() {
  const { lang } = useLanguage();
  const certificates = getCertificates();

  return (
    <div className="mb-20">
      <Title>
        {lang === "en" ? "Badges & Certifications" : "Insignias y Certificaciones"}
      </Title>

      <div className="w-3/4 mx-auto mt-10" style={{ height: "100px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={certificates}
          speed={120}
          direction="left"
          logoHeight={64}
          gap={52}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
