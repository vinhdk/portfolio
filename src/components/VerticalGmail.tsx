interface VerticalGmailProps {
  email: string;
}

const VerticalGmail: React.FC<VerticalGmailProps> = ({ email }) => {
  return (
    <section className="vertical-gmail">
      <a href={`mailto:${email}`} className="vertical-gmail_link">
        {email}
      </a>
      <div className="w-px h-24 bg-slate"></div>
    </section>
  );
};

export default VerticalGmail;