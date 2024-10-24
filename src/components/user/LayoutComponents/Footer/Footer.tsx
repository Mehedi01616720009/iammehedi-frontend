import FooterContent from "../FooterContent/FooterContent";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

const Footer = () => {
    return (
        <div className="small__container border-t border-tartiary mt-14">
            <FooterContent />
            <FooterCopyright />
        </div>
    );
};

export default Footer;
