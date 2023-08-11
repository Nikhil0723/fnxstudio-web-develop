const ContactUs = () => {
  return (
    <a className="[text-decoration:none] relative bg-brand-color-background-color w-full h-[1733px] overflow-hidden text-left text-base text-brand-color-ink-color font-gilroy-medium">
      <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start">
        <div className="bg-whitesmoke-100 flex flex-row py-[60px] px-[125px] items-start justify-start gap-[55px] text-xl text-light-neutral-n700 font-body-2">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[42px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="relative tracking-[0.02em] leading-[140%] uppercase font-medium">
                  Schedule a free call
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-[42px] text-secondary-ink-color font-gilroy-extrabold">
                  <div className="relative leading-[58.8px] flex items-center w-[517.06px]">
                    Request a Call back! Let's Connect
                  </div>
                  <div className="relative text-base tracking-[0.02em] leading-[22.4px] font-medium font-body-2 text-light-neutral-n600 inline-block w-[517.06px]">{`Thousands of businesses rely on our cloud communications platform `}</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-secondary-ink-color">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/support-agent-fill0-wght400-grad0-opsz48-2-1.svg"
                  />
                  <div className="relative tracking-[0.02em] leading-[28px] inline-block w-[502px] shrink-0">
                    Support
                  </div>
                </div>
                <div className="relative text-lg tracking-[0.02em] leading-[26px] font-medium text-light-neutral-n600 flex flex-col w-[528px] ">
                  <a className="m-0" href="">{`team@Fornax.studio `}</a>
                  <a className="m-0" href="">+1 854 985 9853</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px] text-base text-gray-1">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative flex items-center w-[585px] h-[38px] shrink-0">{`Enter your full name `}</div>
                <input
                  className="font-medium font-body-2 text-base bg-whitesmoke-200 rounded-3xs box-border w-[585px] h-[77px] flex flex-col py-4 px-5 items-start justify-center border-[1px] border-solid border-lightgray-100"
                  type="text"
                  placeholder="Full Name "
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative flex items-center w-[585px] h-[38px] shrink-0">
                  Enter your email address
                </div>
                <input
                  className="font-medium font-body-2 text-base bg-whitesmoke-200 rounded-3xs box-border w-[585px] h-[77px] flex flex-col py-4 px-5 items-start justify-center border-[1px] border-solid border-lightgray-100"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative flex items-center w-[585px] h-[38px] shrink-0">
                  Enter your phone no.
                </div>
                <input
                  className="font-medium font-body-2 text-base bg-whitesmoke-200 rounded-3xs box-border w-[585px] h-[77px] flex flex-col py-4 px-5 items-start justify-center border-[1px] border-solid border-lightgray-100"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative flex items-center w-[585px] h-[38px] shrink-0">
                  Please select your service form drop down
                </div>
                <input
                  className="font-medium font-body-2 text-base bg-whitesmoke-200 rounded-3xs box-border w-[585px] h-[77px] flex flex-col py-4 px-5 items-start justify-center border-[1px] border-solid border-lightgray-100"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-lightslategray">
                <div className="relative text-gray-1 flex items-center w-[585px] h-[38px] shrink-0">
                  Please select your service Estimated budget
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <div className="rounded-3xs bg-whitesmoke-200 box-border w-[181px] h-[58px] flex flex-col py-[5px] px-5 items-start justify-center border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative font-medium">$100 - $200</div>
                    </div>
                  </div>
                  <div className="rounded-3xs bg-whitesmoke-200 box-border w-[181px] h-[58px] flex flex-col py-[5px] px-5 items-start justify-center border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative font-medium">$200 - $300</div>
                    </div>
                  </div>
                  <div className="rounded-3xs bg-whitesmoke-200 box-border w-[181px] h-[58px] flex flex-col py-[5px] px-5 items-start justify-center border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative font-medium">$300 - $400</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-3xs bg-whitesmoke-200 box-border w-[181px] h-[58px] flex flex-col py-[5px] px-5 items-start justify-center border-[1px] border-solid border-lightgray-100">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="relative font-medium">Custom</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative flex items-center w-[585px] h-[38px] shrink-0">{`Your Message `}</div>
                <input
                  className="font-medium font-body-2 text-base bg-whitesmoke-200 rounded-3xs box-border w-[585px] h-[77px] flex flex-col py-4 px-5 items-start justify-center border-[1px] border-solid border-lightgray-100"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <button className="cursor-pointer py-[15px] px-[50px] bg-brand-color-primary-color rounded-3xs box-border w-[585px] h-[77px] flex flex-row items-center justify-center border-[1px] border-solid border-brand-color-primary-color">
              <div className="relative text-xl font-gilroy-semibold text-brand-color-background-color text-center">{`Submit `}</div>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContactUs;
