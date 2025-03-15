"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "./ui/button";

export default function Social() {
  return (
    <ul className="flex gap-4">
      <li>
        <div className="social-icon">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger
                className={`${buttonVariants({
                  variant: "default",
                  size: "icon",
                })} scale-[80%]`}
                onClick={() => {
                  window?.open(
                    "https://www.linkedin.com/in/muslimbek-muminov-908590340/",
                    "_blank"
                  );
                }}
              >
                <LinkedInLogoIcon />
              </TooltipTrigger>
              <TooltipContent side="bottom" className="mt-5">
                <p>LikedIn sahifamga o'ting, atiga bir click</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </li>
      <li>
        <div className="social-icon">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger
                className={`${buttonVariants({
                  variant: "default",
                  size: "icon",
                })} scale-[80%]`}
                onClick={() => {
                  window?.open("https://t.me/muminovmuslimbek", "_blank");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="mt-5">
                <p>Telegram sahifamga o'ting, atiga bir click</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </li>
      <li>
        <div className="social-icon">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger
                className={`${buttonVariants({
                  variant: "default",
                  size: "icon",
                })} scale-[80%]`}
                onClick={() => {
                  window?.open(
                    "mailto:muslimbekmuminov47@gmail.com?subject=Muslimbek Toashtemirov ga xat",
                    "_blank"
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                </svg>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="mt-5">
                <p>Email sahifamga o'ting, atiga bir click</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </li>
      <li>
        <div className="social-icon">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger
                className={`${buttonVariants({
                  variant: "default",
                  size: "icon",
                })} scale-[80%]`}
                onClick={() => {
                  window?.open("https://github.com/MuminovMuslimbek", "_blank");
                }}
              >
                <GitHubLogoIcon />
              </TooltipTrigger>
              <TooltipContent side="bottom" className="mt-5">
                <p>GitHub sahifamga o'ting, atiga bir click</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </li>
    </ul>
  );
}
