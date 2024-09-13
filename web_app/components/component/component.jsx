/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/tPVOKL9mR4Q
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Syne } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

syne({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <ShieldCheckIcon className="h-6 w-6" />
          <span className="sr-only">Deepfake Detector</span>
          <div className="ml-2 font-semibold">Deepfake Detector</div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Upload Video
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Recent Detections
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Detect Deepfakes with Confidence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our advanced AI-powered tool analyzes videos for facial inconsistencies, ensuring you can trust what
                    you see.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Upload Video
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Deepfake Detection"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The Detection Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Analyzing Videos for Deepfake Anomalies
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <ScanFaceIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-medium">Facial Features</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <LightbulbIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-medium">Lighting</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                      <EyeIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-medium">Eye/Lip Movement</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Confidence Scores</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Understand the Likelihood of Deepfakes
                </h2>
                <p
                  className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Each detected anomaly is assigned a confidence score, providing you with a clear understanding of the
                  likelihood that the video is a deepfake. This allows you to make informed decisions about the content
                  you consume or share.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Blockchain Integration</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Secure Storage and Traceability</h2>
                <p
                  className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Detected deepfakes are securely uploaded to the blockchain, ensuring a tamper-proof record of the
                  analysis. This allows for future reference and further investigation, contributing to the ongoing
                  fight against the spread of misinformation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Recent Detections</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Stay Informed on the Latest Deepfakes
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Deepfake of Political Leader Debunked
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Celebrity Deepfake Exposed
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Deepfake Detector. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function EyeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}


function ScanFaceIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>)
  );
}


function ShieldCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>)
  );
}
