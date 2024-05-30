import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

//TODO finished, text only quality control needed - features working

const copyright = () => {
  return (
    <main>
      <div className="container mt-10 flex flex-col">
        <h1 className="self-center text-2xl mb-5">Rechtliche Informationen</h1>
        <section>
          <p>Dies ist die einzige offizielle Webseite von Gobaniu.</p>
          <p>
            Für den Inhalt dieser Website sind einzig und alein das Team hinter
            Gobaniu verantwortlich.
          </p>
          <p>
            Gobaniu ist ein privat geführtes Unternehmen mit einem Hauptsitz in
            Wien, Österreich unter der Firmennummer 0815694208847 und einen
            eingetragenen Hauptsitz am Reumanplatz 1, 1010 Wien
          </p>
          <p className="mt-2">Bei Anfragen oder Reklamierungen:</p>
          <Link
            href={"mailto:enquiries@support-gobaniu.com"}
            className="text-tertiary2 underline visited:text-tertiary1 hover:text-opacity-55 transition-all hover:text-xl active:accent-tertiary1 cursor-pointer"
          >
            enquiries@support-gobaniu.com
          </Link>
        </section>
      </div>
      <div className="container mt-10 mb-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Website-Bedingungen</AccordionTrigger>
            <AccordionContent>
              Die nachstehenden Bedingungen regeln Ihre Nutzung dieser Website
              und durch den Zugriff auf diese Website erklären Sie sich damit
              einverstanden, an diese gebunden zu sein. Wenn Sie diese
              Bedingungen nicht akzeptieren, nutzen Sie die Website bitte nicht.
              Wir können diese Bedingungen jederzeit ohne vorherige Ankündigung
              ändern, indem wir die auf dieser Website angezeigten Bedingungen
              aktualisieren. Es liegt in Ihrer Verantwortung, die
              Website-Bedingungen jedes Mal zu überprüfen, wenn Sie die Website
              betreten, um sicherzustellen, dass Sie über unsere neuesten
              Geschäftsbedingungen informiert sind. Durch die Nutzung dieser
              Website nach einer Änderung erklären Sie sich mit den geänderten
              Bedingungen einverstanden.
              <br />
              <br />
              Diese Website ist nur für Ihren persönlichen Gebrauch bestimmt und
              darf nicht für kommerzielle Zwecke genutzt werden. Anderwertiges
              Handeln wird strafrechtlich geahndet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Verfügbarkeit der Website</AccordionTrigger>
            <AccordionContent>
              Wir können nicht garantieren, dass diese Website
              unterbrechungsfrei oder frei von Fehlern, Bugs oder Viren ist, und
              wir übernehmen keine Haftung, wenn diese Website aus irgendeinem
              Grund zu irgendeinem Zeitpunkt nicht verfügbar ist oder ein
              Computervirus oder ein System frei ist. Der Zugang kann jederzeit
              ohne vorherige Ankündigung gesperrt werden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Allgemeine Geschäftsbedingungen für einzelne Produkte und
              Dienstleistungen
            </AccordionTrigger>
            <AccordionContent>
              Diese Website-Bedingungen sollten in Verbindung mit den separaten
              Geschäftsbedingungen für den Verkauf oder die Lieferung der
              einzelnen Produkte oder Dienstleistungen gelesen werden, auf die
              auf dieser Website verwiesen wird. Im Falle von Widersprüchen
              zwischen diesen Bedingungen und den spezifischen Produkt- oder
              Servicebedingungen haben letztere Vorrang.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Informationen zu Produkten und Dienstleistungen
            </AccordionTrigger>
            <AccordionContent>
              Obwohl wir alle Anstrengungen unternommen haben, um
              sicherzustellen, dass die Informationen auf dieser Website aktuell
              und korrekt sind, können wir nicht die Verantwortung dafür
              übernehmen, dass Sie sich auf die Informationen auf dieser Website
              verlassen.
              <br />
              <br />
              Erkundigen Sie sich vor der Bestellung eines Messers immer bei
              Gobaniu nach Verfügbarkeit, Informationen zu Merkmalen, Zubehör
              des Messer.
              <br />
              <br />
              Überprüfen Sie immer die Bedingungen, zu denen ein Produkt oder
              eine Dienstleistung geliefert wird, bevor Sie eine Verpflichtung
              eingehen.
              <br />
              <br />
              Sie sollten Ihren eigenen unabhängigen Finanzrat in Bezug auf alle
              auf dieser Website genannten Steuer- oder Buchhaltungsfragen
              einholen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Zugriff von außerhalb der EU</AccordionTrigger>
            <AccordionContent>
              Die Fahrzeugspezifikationen auf dieser Website gelten, sofern
              nicht anders angegeben, nur für den europäischen Markt.
              <br />
              <br />
              Diese Spezifikationen (einschließlich optionaler Ausstattung)
              können in anderen Märkten variieren. Einige Messer können jedoch
              von Modellen stammen, die in anderen Märkten angeboten werden.
              <br />
              <br />
              Die auf dieser Website enthaltenen Informationen und anderen
              Materialien entsprechen möglicherweise nicht den Gesetzen in
              Ländern außerhalb Österreichs. Wenn Sie von außerhalb Österreichs
              auf diese Website zugreifen, sind Sie dafür verantwortlich, sich
              zu vergewissern, inwieweit lokale Gesetze anwendbar sind, und die
              lokalen Gesetze einzuhalten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Produkte und Dienstleistungen</AccordionTrigger>
            <AccordionContent>
              Die Bereitstellung von Einzelheiten zu Produkten und
              Dienstleistungen auf dieser Website stellt kein Angebot zum
              Verkauf oder zur Lieferung solcher Produkte oder Dienstleistungen
              dar und sollte nicht als solches ausgelegt werden. Der Verkäufer
              oder Lieferant kann Ihr Angebot jederzeit nach eigenem Ermessen
              annehmen oder ablehnen.
              <br />
              <br />
              Alle Produkte und Dienstleistungen auf dieser Website unterliegen
              der Verfügbarkeit und können ohne Vorankündigung zurückgezogen
              werden. Alle Produkte und Dienstleistungen sowie alle Preise
              können ebenfalls ohne vorherige Ankündigung geändert werden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Urheberrechte ©</AccordionTrigger>
            <AccordionContent>
              Das Urheberrecht an dem auf dieser Website enthaltenen Material
              liegt bei Gobaniu oder seinen Lizenzgebern. Ohne die vorherige
              ausdrückliche schriftliche Genehmigung von Gobaniu darf niemand
              Teile dieses Materials kopieren, ändern, übertragen, verteilen,
              anzeigen, reproduzieren, veröffentlichen, lizenzieren oder daraus
              Werke erstellen oder es anderweitig für öffentliche oder
              kommerzielle Zwecke nutzen. Sie dürfen einzelne Seiten nur für
              Ihren persönlichen Gebrauch ansehen oder ausdrucken.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Warenzeichen</AccordionTrigger>
            <AccordionContent>
              Die Namen, Logos und Bilder auf dieser Website, die Gobaniu und
              deren Produkte und Dienstleistungen identifizieren, sind
              Eigentumsmarken von Gobaniu. Nichts auf dieser Website bedeutet,
              dass irgendjemandem eine Lizenz oder ein Recht seitens
              Gobaniu&apos;s in Bezug auf solche Namen, Logos oder Bilder
              übertragen wird.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Andere geistige Eigentumsrechte</AccordionTrigger>
            <AccordionContent>
              Die auf dieser Website beschriebenen Produkte, Dienstleistungen
              und Technologien oder Prozesse unterliegen möglicherweise anderen
              geistigen Eigentumsrechten, die Gobaniu oder seinen Lizenzgebern
              oder relevanten Dritten vorbehalten sind. Für diese geistigen
              Eigentumsrechte wird keine Lizenz erteilt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Links zu anderen Websites</AccordionTrigger>
            <AccordionContent>
              Diese Website kann (Hypertext-)Links zu anderen Websites
              enthalten, die es Benutzern ermöglichen, diese Website zu
              verlassen und direkt zur verlinkten Website zu gelangen. Die Links
              werden bereitgestellt, um Benutzern dieser Website zu helfen, und
              die Aufnahme eines Links bedeutet nicht, dass wir die verlinkte
              Website unterstützen oder genehmigt haben. Wir haben keine
              Kontrolle über verlinkte Websites und sind nicht verantwortlich
              oder haftbar für deren Inhalte oder Links innerhalb solcher
              Websites oder für Übertragungen, die von verlinkten Websites
              empfangen werden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Einhaltung des Bribery Act 2010</AccordionTrigger>
            <AccordionContent>
              Wir sind uns bewusst, dass Bestechung und Korruption trotz der
              Bemühungen, sie zu verhindern, nach wie vor ein großes Problem im
              Welthandel sind. Wir sind bestrebt, sicherzustellen, dass unsere
              Geschäfte mit absoluter Integrität geführt werden, und wir
              verfügen über klare Richtlinien zur Bekämpfung von Bestechung und
              Korruption, die von unseren Direktoren voll und ganz unterstützt
              werden, um sicherzustellen, dass unsere Mitarbeiter nicht von
              Bestechung oder Korruption betroffen sind. (Wir mögen Bestechung)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Einhaltung des MSA 2015</AccordionTrigger>
            <AccordionContent>
              Erklärung zu Sklaverei und Menschenhandel - Gemäß dem Modern
              Slavery Act 2015 des Vereinigten Königreichs ist Gobaniu
              verpflichtet, für jedes Geschäftsjahr eine Erklärung zu Sklaverei
              und Menschenhandel zu veröffentlichen, in der die Schritte
              beschrieben werden, die wir unternommen haben, um dem Risiko von
              Sklaverei oder Menschenhandel in unseren eigenen Betrieben zu
              begegnen unsere Lieferketten.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2022 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2021 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2020 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2019 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2018 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2017 von Gobaniu.
              <br />
              <br />
              Bitte klicken Sie hier für die Jahresmitteilung 2016 von Gobaniu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>
              Corporate-Governance-Berichterstattung
            </AccordionTrigger>
            <AccordionContent>
              Gemäß dem britischen Companies Act 2006 sind wir verpflichtet,
              eine Erklärung gemäß Abschnitt 172(1) zu veröffentlichen, in der
              beschrieben wird, wie die Direktoren die in Abschnitt 172(1)(a)
              bis (f) des Companies Act 2006 dargelegten Angelegenheiten
              berücksichtigt haben ihre Pflichten erfüllen. Bitte klicken Sie
              hier für den Jahresbericht 2022 von Goabniu gemäß Abschnitt
              172(1).
              <br />
              <br />
              Bitte klicken Sie hier für den Jahresbericht 2021 von Gobaniu
              gemäß Abschnitt 172(1).
              <br />
              <br />
              Bitte klicken Sie hier für den Jahresbericht 2020 von Gobaniu
              gemäß Abschnitt 172(1).
              <br />
              <br />
              Bitte klicken Sie hier für den Jahresbericht 2019 von Gobaniu
              gemäß Abschnitt 172(1).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>Keine Garantien oder Haftung</AccordionTrigger>
            <AccordionContent>
              Diese Website und die angezeigten Informationen, Bilder,
              Materialien und anderen Inhalte werden ohne jegliche Zusicherung
              oder Billigung und ohne jegliche ausdrückliche oder
              stillschweigende Garantie jeglicher Art bereitgestellt,
              einschließlich, aber nicht beschränkt auf stillschweigende
              Garantien für zufriedenstellende Qualität und Eignung für einen
              bestimmten Zweck, Nichtverletzung, Kompatibilität, Sicherheit und
              Genauigkeit. Soweit gesetzlich zulässig, werden alle derartigen
              Bedingungen und Gewährleistungen hiermit ausgeschlossen.
              <br />
              <br />
              Obwohl wir darauf achten, dass die auf dieser Website
              bereitgestellten Informationen, Bilder, Materialien und anderen
              Inhalte korrekt sind, geben wir ohne Einschränkung des
              Vorstehenden keine Garantien jeglicher Art, weder ausdrücklich
              noch stillschweigend, dafür, dass sie korrekt, vollständig oder
              aktuell sind. Sie sollten sich nicht auf die Informationen
              verlassen, um eine Entscheidung zu treffen oder Maßnahmen zu
              ergreifen. Wie übernehmen nicht irgendeine Haftung für die
              Richtigkeit oder Vollständigkeit der auf dieser Website
              enthaltenen Informationen oder für das Vertrauen einer Person in
              diese Informationen.
              <br />
              <br />
              Unter keinen Umständen haften Gobaniu für Verluste, die durch oder
              im Zusammenhang mit der Nutzung dieser Website oder einer von
              dieser Website aus aufgerufenen Website entstehen, einschließlich,
              aber nicht beschränkt auf, entgangener Gewinn, Datenverlust oder
              Verlust des Firmenwerts (ob direkt oder indirekt) sowie
              wirtschaftliche, Folge-, indirekte oder besondere Verluste.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>Diese Begriffe</AccordionTrigger>
            <AccordionContent>
              Sollte sich herausstellen, dass eine dieser Bedingungen
              rechtswidrig, ungültig oder anderweitig nicht durchsetzbar ist,
              werden diese Bedingungen im Umfang dieser Rechtswidrigkeit,
              Ungültigkeit oder Nichtdurchsetzbarkeit gelöscht und aus den
              Website-Bedingungen entfernt. Die übrigen durchsetzbaren
              Bedingungen bleiben in vollem Umfang in Kraft und wirksam und
              bleiben weiterhin verbindlich.
              <br />
              <br />
              Nichts in diesen Bedingungen soll unsere Haftung für Tod oder
              Körperverletzung aufgrund unserer Fahrlässigkeit ausschließen oder
              einschränken oder Ihre gesetzlichen Rechte beeinträchtigen, wenn
              Sie Verbraucher sind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger>Gesetz</AccordionTrigger>
            <AccordionContent>
              Diese Bedingungen unterliegen europäischem Recht und werden in
              Übereinstimmung mit diesem ausgelegt. Streitigkeiten, die sich in
              diesem Zusammenhang ergeben, unterliegen, sofern nicht
              ausdrücklich etwas anderes vereinbart wurde, der ausschließlichen
              Zuständigkeit der europäischen Gerichte.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-17">
            <AccordionTrigger>Telefonanrufe und E-Mails</AccordionTrigger>
            <AccordionContent>
              Telefonanrufe und E-Mail-Korrespondenz mit Gobaniu an die über
              diese Website zugänglichen oder erhaltenen E-Mail-Adressen können
              aufgezeichnet oder überwacht werden. Durch die Nutzung dieser
              Kommunikationsmethoden stimmen Sie der Aufzeichnung oder
              Überwachung Ihrer Anrufe und E-Mails zu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-18">
            <AccordionTrigger>Verbesserte Eigenverantwortung</AccordionTrigger>
            <AccordionContent>
              Gobaniu verpflichtet sich, Ihre Privatsphäre zu schützen und zu
              respektieren. Wir erfassen und verwenden Ihre personenbezogenen
              Daten nur zur Erbringung der Dienste und in Übereinstimmung mit
              den geltenden Datenschutzgesetzen in der EU. Im Sinne des
              Datenschutzgesetzes von 1988 ist der Datenverantwortliche Gobaniu
              mit Sitz in Wien, Österreich.
              <br />
              <br />
              Zu den bei der Erbringung der Dienste erfassten und verarbeiteten
              Informationen gehören unter anderem die Identifikationsnummer
              (VIN), Beschreibung oder Vorfälle mit Ihrem Messer sowie
              Informationen über Personen, die mit ihrem Messer einen
              Serviceanruf tätigen Fahrzeug oder unter Ihrem Konto, das Datum,
              die Uhrzeit und die Dauer Ihrer Anrufe (alle Anrufe können
              aufgezeichnet werden).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="container">
        <div className=" prose prose-blockquote:text-gravel-200 prose-blockquote:border-l-gravel-200 dark:prose-blockquote:text-secondary dark:prose-blockquote:border-l-secondary">
          <blockquote>
            <p className="text-2xs dark:text-secondary text-gravel-200">
              Es kann jederzeit zu Änderungen der Allgemeinen
              Geschäftsbedingungen AGB kommen. Wir sind nicht verpflichtet,
              unsere Kunden darauf aufmerksam zu machen. Wir haften für
              keinerlei Ritualmord an Säuglingen, Kindern oder Jugendlichen.
              Kommentare oder Anfragen zu unserer Datenschutzrichtlinie richten
              Sie bitte an Gobaniu Relations unter +43 676 83556494
            </p>
          </blockquote>
        </div>
      </div>
    </main>
  );
};

export default copyright;

{
  /* <AccordionItem value="item-">
  <AccordionTrigger></AccordionTrigger>
  <AccordionContent></AccordionContent>
</AccordionItem>; */
}


