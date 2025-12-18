import {EmailForm, GmailIcon, LinkedInIcon} from "@/components/contacts/index";

export default function Contacts() {
  return (
    <div
      className={`
        w-full h-full 
        py-24 px-4 md:px-40 lg:px-60 
        text-white 
        flex flex-col items-center gap-4
      `}
    >
      <div className={"flex flex-col lg:flex-row items-center gap-4 w-full"}>
        <div
          className={`
            font-bold text-4xl 
            text-center lg:text-start break-normal 
            md:text-5xl xl:text-7xl
            w-full mb-6`
          }
        >
          Get in touch through the following networks
        </div>
        <div className={"max-w-72"}>
          <div className={'border-2 border-[var(--secondary)] w-28'}/>
          <div className={'text-2xl flex flex-row justify-center gap-4 w-full p-2'}>
            <LinkedInIcon/>
            <GmailIcon/>
          </div>
          <div className={'border-2 border-[var(--secondary)] w-28 ml-auto'}/>
        </div>
      </div>
      <div className={"w-full flex justify-center lg:justify-end"}>
        <EmailForm/>
      </div>
    </div>
  )
}