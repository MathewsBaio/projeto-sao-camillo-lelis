import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-info">
        <div className="footer-logo">
          <img src="/placeholders/logo.png" />
        </div>
        <FooterNav />
      </div>
      <div>
        <hr className="separator"></hr>
      </div>
      <div className="footer-social-media">
        <div>2024@Desenvolvido por alunos do Instituto Vianna Júnior</div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
