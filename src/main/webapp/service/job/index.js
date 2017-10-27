const baseURL = '/stefanhauschildt';

export const getJobList = () => {
  return fetch(`${baseURL}/jobs`)
    .then(response => {
      //if (!response.ok) throw new Error('Response not ok')
      //return response.json()
      return [
        {
          position: "Java-Entwickler",
          company: {
            name: "Behörde für Schule und Berufsbildung",
            url: "http://www.hamburg.de/bsb/",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Beh%C3%B6rde-f%C3%BCr-Schule-und-Berufsbildung-Logo.svg/2000px-Beh%C3%B6rde-f%C3%BCr-Schule-und-Berufsbildung-Logo.svg.png"
          },
          description: [
            "Im Umfeld von Java 8 und HTML 5 arbeite ich in einem agilen Team von fünf Entwicklern an einer Webanwendung (RESTful) für die Hamburger Schulen, in welcher die Statistikdaten der Schülerinnen und Schüler Hamburgs ermittelt und verarbeitet werden. Hierbei bediene ich alle Schichten von der Datenbank (PostgreSQL und H2), über das Backend in Java (Java 8, Sprint) bis zu JavaScript (JavaScript, Dojo Toolkit) im Frontend.",
            "Schwerpunkt bildet eine asynchrone Schnittstelle an der die Schülerdaten auf Gültigkeit und Plausibilität geprüft werden. Hierbei findet besonders die Stream-API von Java8 Einsatz, zusammen mit JMS via ActiveMQ.",
            "Für Unit- und Integrationstests benutzen wir hier JUnit4 mit Flyway und Mockito. Zusätzlich werden für die Benutzeroberflächen Tests mit Selenium und JBehave geschrieben (BDD)."
          ],
          tags: [
            {label: "Java 8", cat: "tech"},
            {label: "Spring", cat: "tech"},
            {label: "Spring MVC", cat: "tech"},
            {label: "Spring Security", cat: "tech"},
            {label: "Hibernate", cat: "tech"},
            {label: "Hibernate Search", cat: "tech"},
            {label: "Jackson", cat: "tech"},
            {label: "ActiveMQ", cat: "tech"},
            {label: "JavaScript", cat: "tech"},
            {label: "Dojo Toolkit", cat: "tech"},
            {label: "WebSocket", cat: "tech"},
            {label: "HTML 5", cat: "tech"},
            {label: "ThymeLeaf", cat: "tech"},
            {label: "JPA", cat: "tech"},
            {label: "PostgreSQL", cat: "tech"},
            {label: "H2", cat: "tech"},
            {label: "JUnit 4", cat: "tech"},
            {label: "JBehave", cat: "tech"},
            {label: "Selenium", cat: "tech"},
            {label: "Flyway", cat: "tech"},
            {label: "Mockito", cat: "tech"},
            {label: "Scrum", cat: "soft"},
            {label: "Git", cat: "tools"},
            {label: "Maven", cat: "tools"},
            {label: "Jenkins", cat: "tools"},
            {label: "Eclipse", cat: "tools"}
          ]
        },
        {
          position: "Softwareentwickler",
          company: {
            name: "pdv financial software GmbH",
            url: "http://www.pdv-fs.de/",
            img: "http://www.pdv-fs.de/contell/cms/c1web/pdvfs/library/images/pdv_financialSoftware_medium.jpg"
          },
          description: [
            "pdv financial software GmbH (pdv) ist ein Hamburger Softwarehaus, dessen Produktfamilie DECIDE Lösungen zum Order- und Positionsmanagement beinhaltet. Es gibt verschiedene Module von der Kursbereitstellung, über Risikomanagement, Orderplatzierung, bis hin zu Verwaltung von Beständen.",
            "Meine Aufgabe war es auf den bestehenden Bibliotheken eine Anwendung für den asiatischen Retail-Bereich zu schreiben. Vorhandene Oberflächen sollten schlanker und übersichtlicher gestaltet werden, sodass die Kundenberater und Trader einfacher arbeiten können. Zudem war es besonders wichtig, die Vielzahl von Events möglichst effizient zu verarbeiten, sodass der Trader möglichst ohne Verzögerungen die aktuellen Kurse sehen kann.",
            "Die in Lua geschriebenen Oberflächen bauen auf bestehenden Funktionalitäten in C++ auf, sodass es für mich notwendig war mich täglich mit den verschiedenen Abteilungen der Firma kurzzuschließen, um vorhandene Strukturen in das neue Frontend zu integrieren. Auch die Zusammenarbeit mit dem Customer Support und unseren Kunden in Thailand ist sehr eng. Dadurch, dass ich gerne und gut kommunizieren kann, wurde ich von pdv bereits viermal nach Bangkok geschickt, um Anforderungen direkt mit dem Kunden zu besprechen.",
            "Erwähnenswert ist außerdem, dass der von mir erstellte Code die höchste Testabdeckung der Firma aufweist.",
            "Zusätzlich habe ich in einem kleinen Team an der Entwicklung von Algorithmen für die automatisierte Orderplatzierung im institutionellen Bereich gearbeitet. Beispielsweise um große Orders so am Markt zu platzieren, dass sie möglichst wenig Einfluss auf den Preis haben."
          ],
          tags: [
            {label: "Lua", cat: "tech"},
            {label: "Unittests", cat: "soft"},
            {label: "Integrationstests", cat: "soft"},
            {label: "Algorithmen", cat: "soft"},
            {label: "Börse", cat: "soft"},
            {label: "Emacs", cat: "tools"},
            {label: "Perforce", cat: "tools"}
          ]
        }
      ]
    })
}
