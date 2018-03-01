import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      {
        id: 1,
        location: 'Berlin-Mitte',
        name: 'erster Spaziergang',
        preview_image: '/assets/images/datawalk.png',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ' +
        'magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
        'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
        'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ' +
        'rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
        'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ' +
        'et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   ' +
        '\n' +
        '\n' +
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis ' +
        'at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla ' +
        'facilisi. Lorem ipsum dolor sit amet,',
        entry: 0,
        points: [
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.390789031982422,
            lon: 52.51833617387861,
            img: '/assets/images/datawalk.png',
            content: 'Die Karte zeigt die Verteilung sämtlicher im Rahmen der Ökostromförderung geförderter Photovoltaik-Anlagen im ' +
            'Stadtgebiet ergänzt durch die Kollektorfläche bzw. Leistung und das Errichtungsdatum der Anlage. Größere Anlagen sind durch ' +
            'größere Symbole dargestellt. Innovative Projekte wie die BürgerInnen-Solarkraftwerke haben ebenso ihren Platz in dieser ' +
            'Kartenansicht wie Anlagen auf Wohnhäusern oder Betrieben.Eine Darstellung der Photovoltaikanlagen verortet auf einer Karte ist ' +
            'in Wien einzigartig.Eine dieser Anlagen befindet sich auf dem Gebäude bei der Station. Dabei handelt es sich um eine ' +
            'Photovoltaik-Eigenerzeugungsanlage mit einer Gesamtleistung von 13 kWp und einer Fläche ca. 200 m2. Auf der Infotafel in der ' +
            'Felderstrasse werden folgende Meßdaten angezeigt: Aktuelle Leistung in kW, Aktueller Einstrahlungswert im W/m2, Gesamtertrag ' +
            'in kWh.',
            title: 'Planungswerkstatt / geförderte Photovoltaikanlagen',
            link: 'http://datenschule.de'
          },
          {
            id: 1,
            next: 2,
            prev: 0,
            lat: 13.394072055816649,
            lon: 52.51682151784933,
            img: '/assets/images/datawalk.png',
            content: 'Die Grundkarte von Österreich basiert auf den Geodaten der Länder und deren Partnern. Sie ist <b>frei verfügbar</b>  ' +
            'und performant. Die Geodaten stammen von:<br /><ul>\n' +
            '<li>den neun Ländern Österreichs (<a href="http://www.geoland.at/" target="_blank" tabindex="-1">geoland.at</a>)</li>\n' +
            '<li>dem Projekt <a href="http://www.gip.gv.at/" target="_blank" tabindex="-1">GIP.at</a></li>\n' +
            '<li>den einigen Städten</li>\n' +
            '</ul>',
            title: 'Stadtinformationszentrum / Verwaltungsgrundkarte',
            link: 'http://datenschule.de'
          },
          {
            id: 2,
            next: 3,
            prev: 1,
            lat: 13.394308090209961,
            lon: 52.514209919312506,
            img: '/assets/images/datawalk.png',
            content: 'Neben Bäumen in Straßenzügen umfasst der Baumkataster auch Bäume in Parks und waldähnlichen Flächen in Wien. Die Bäume ' +
            'in Straßenzügen sind komplett erfasst, da sie der MA 42 als Arbeitsbehelf dienen. Die Bäume in Parks und waldähnlichen Flächen ' +
            'sind hingegen nur teilweise erfasst.:',
            title: 'Rathauspark / Baumkataster',
            link: 'http://datenschule.de'
          },
          {
            id: 3,
            next: 4,
            prev: 2,
            lat: 13.391432762145996,
            lon: 52.51279959156077,
            img: '/assets/images/datawalk.png',
            content: 'Je Markt ist ein vollständiger Stand-Katalog verfügbar, inklusive Produktkategorien, Öffnungszeiten und weiteren ' +
            'Informationen. Interaktive Marktpläne sorgen für eine bessere Orientierung und Übersicht.',
            title: 'Biobauernmarkt Freyung / Markt APP',
            link: 'http://datenschule.de'
          },
          {
            id: 4,
            next: 5,
            prev: 3,
            lat: 13.390467166900635,
            lon: 52.51426215280443,
            img: '/assets/images/datawalk.png',
            content: 'Im RIS werden die Bundesgesetzblätter und die Landesgesetzblätter aller 9 Bundesländer rechtlich verbindlich ' +
            'kundgemacht. Ferner findet man im RIS das konsolidierte Bundes- und Landesrecht und die Judikatur. Ebenso sind ua. ' +
            'ausgewählte Verordnungen der Gemeinden und Erlässe der Bundesministerien sowie die Amtliche Verlautbarung der Sozialversicherung ' +
            'enthalten.',
            title: 'Bundeskanzleramt / Rechtsinformationssystem (RIS)',
            link: 'http://datenschule.de'
          },
          {
            id: 5,
            next: 6,
            prev: 4,
            lat: 13.385703563690186,
            lon: 52.51452331933267,
            img: '/assets/images/datawalk.png',
            content: 'Lorem Ipsum',
            title: 'erster Spaziergang: Number 6',
            link: 'http://datenschule.de'
          },
          {
            id: 6,
            next: 7,
            prev: 5,
            lat: 13.387548923492432,
            lon: 52.516024996747156,
            img: '/assets/images/datawalk.png',
            content: 'Bei der parlamentarischen Arbeit entstehen wöchentlich Hunderte Seiten an Dokumenten rund um den Gesetzgebungsprozess. ' +
            'Von Gesetzesinitiativen und Beschlüssen über Tagesordnungen und Stenographische Protokolle bis hin zu den Berichten der ' +
            'Parlamentskorrespondenz sind diese Informationen zu den Aktivitäten von National- und Bundesrat online verfügbar – ein Teil ' +
            'davon auch als Open Data. Unter anderem nutzt das Forum Informationsfreiheit die Daten für das Projekt OffenesParlament.at.',
            title: 'Parlament / offenes Parlament',
            link: 'http://datenschule.de'
          },
          {
            id: 7,
            next: 8,
            prev: 6,
            lat: 13.386948108673096,
            lon: 52.51735687637764,
            img: '/assets/images/datawalk.png',
            content: 'Praxisorientierte Fallbeispiele zu den vielfältigen Arbeitsaufgaben in der Bezirksvorstehung (vor allem zu ' +
            'Beschwerdemanagement und Projektmanagement). Die Unterrichtsvorbereitung ist durch die Tandem-Zusammenarbeit mit der ' +
            'Bezirksvorstehung des 5. Wiener Gemeindebezirks im Zuge des Open Data Day 2017 entstanden.',
            title: 'ehem. Landesschulrat / OpenClassrooms der Berufsschule für Verwaltungsberufe',
            link: 'http://datenschule.de'
          },
          {
            id: 8,
            next: 0,
            prev: 7,
            lat: 13.38883638381958,
            lon: 52.51905431150669,
            img: '/assets/images/datawalk.png',
            content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung Ludwig Wien zu bereits aufbereiteten ' +
            'Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
            title: 'Museumsquartier / Was haben die Künstler der Sammlung des mumok mit der Wirtschaftsuniversität Wien zu tun?',
            link: 'http://datenschule.de'
          }
        ],
        lines: [
          {id: 'line1', coordinates: []}
        ],
        pages: [
          {
            id: 0,
            type: "overview_map",
            data: {
              points: [
                {lat: 13.390789031982422, lon: 52.51833617387861},
                {lat: 13.394072055816649, lon: 52.51682151784933},
                {lat: 13.394308090209961, lon: 52.514209919312506},
                {lat: 13.391432762145996, lon: 52.51279959156077},
                {lat: 13.390467166900635, lon: 52.51426215280443},
                {lat: 13.385703563690186, lon: 52.51452331933267},
                {lat: 13.387548923492432, lon: 52.516024996747156},
                {lat: 13.386948108673096, lon: 52.51735687637764},
                {lat: 13.38883638381958, lon: 52.51905431150669}
              ]
            },
            next: 1
          },
          {
            type: "pointtopoint",
            id: 1,
            data: {
              name: "First Section",
              points: [{lat: 13.38883638381958, lon: 52.51905431150669}, {at: 13.386948108673096, lon: 52.51735687637764}]
            },
            next: 2
          },
          {
            type: "story",
            id: 2,
            data: {
              img: '/assets/images/datawalk.png',
              content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung Ludwig Wien zu bereits aufbereiteten ' +
              'Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
              title: 'Museumsquartier / Was haben die Künstler der Sammlung des mumok mit der Wirtschaftsuniversität Wien zu tun?',
              link: 'http://datenschule.de'
            },
            next: 3
          },
          {
            type: "PointToPointMapComponent",
            id: 3,
            data: {
              name: "First Section",
              points: [{lat: 13.38883638381958, lon: 52.51905431150669,}, {at: 13.386948108673096, lon: 52.51735687637764}]
            },
            next: 4,
          },
          {
            type: "QuizComponent",
            id: 4,
            data: {
              question: "How do you do",
              answers: [ "Good", "Bad", "Fine" ],
              correct: 2
            },
            next: 5
          },
          {
            type: "success",
            id: 5,
            data: { message: "You won!!!!"}
          }
        ]
      },
      {
        id: 2,
        location: 'Bonn',
        name: 'Rund um Bonn',
        preview_image: '/assets/images/datawalk.png',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n' +
        '\n' +
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,',
        points: [
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.390789031982422,
            lon: 52.51833617387861,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.394072055816649,
            lon: 52.51682151784933,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.394308090209961,
            lon: 52.514209919312506,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.391432762145996,
            lon: 52.51279959156077,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.390467166900635,
            lon: 52.51426215280443,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.385703563690186,
            lon: 52.51452331933267,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.387548923492432,
            lon: 52.516024996747156,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.386948108673096,
            lon: 52.51735687637764,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          },
          {
            id: 0,
            next: 1,
            prev: 8,
            lat: 13.38883638381958,
            lon: 52.51905431150669,
            img: '/assets/images/datawalk.png',
            title: 'Bonn: Number 1',
            content: 'Lorem Ipsum',
            link: 'http://datenschule.de'
          }
        ]
      }
    ];
    return {courses};
  }
}
