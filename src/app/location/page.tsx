"use client"

import Header from "../../../components/header"

// @refresh reset

export default function Location() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white p-16 dark:bg-bgDark dark:text-white">
        <div className="container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
          <Header displayText="Standort und Anfahrt" />

          <div className="flex flex-col items-center max-w-md break-words mx-auto text-center">
            <p>
              Bitzfeld ist ein Ortsteil der Gemeinde Bretzfeld und liegt an der
              A6s Heilbronn - Nürnberg. Von Heilbronn kommend: Ausfahrt Bretzfeld
              Von Nürnberg kommend: Ausfahrt Öhringen Nach Bitzfeld sind es
              jeweils 4km (der Beschilderung folgen). Formenbau:
            </p>
          </div>

          <div className="flex items-center justify-center">
            <iframe
              height="400"
              src="https://maps.google.de/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld,+Bretzfeld&amp;aq=t&amp;sll=49.187222,9.443672&amp;sspn=0.002135,0.004624&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld+74626+Bretzfeld,+Stuttgart,+Baden-W%C3%BCrttemberg&amp;z=14&amp;ll=49.190184,9.445164&amp;output=embed"
              width="600"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}