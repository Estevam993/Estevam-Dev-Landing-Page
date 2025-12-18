import {IconBrandGmail, IconBrandLinkedinFilled} from "@tabler/icons-react";

type OpenLinkProps = (link: string) => Window | null

const openLink: OpenLinkProps = (link: string) => window.open(link, "_blank");

const LinkedInIcon = () => {
  return (
    <IconBrandLinkedinFilled
      className={'linkedin rounded-xl cursor-pointer hover:scale-105 ease-in-out transition duration-150'}
      size={'4rem'}
      onClick={() => openLink(process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '')}
    />
  )
}

const GmailIcon = () => {
  const handleClick = () => {
    window.location.href = "mailto:" + process.env.NEXT_PUBLIC_EMAIL_USER;
  };

  return (
    <div
      className="rounded-xl cursor-pointer hover:scale-105 ease-in-out transition duration-150 text-red-400"
      onClick={handleClick}
    >
      <IconBrandGmail
        className="rounded-xl"
        size="4rem"
      />
    </div>
  );
};

export {LinkedInIcon, GmailIcon};